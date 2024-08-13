<script>
    import { onMount, createEventDispatcher } from 'svelte';
    import * as d3 from 'd3';

    export let categories = [];
    export let sectors = [];
    export let links = [];

    const dispatch = createEventDispatcher();
    let width;
    let height;
    let svg;
    let container;

    function initGraph() {
        if (!container) return;

        const rect = container.getBoundingClientRect();
        width = rect.width;
        height = rect.height;

        d3.select('#graph').selectAll('*').remove();

        svg = d3.select('#graph')
            .attr('width', width)
            .attr('height', height);

        const simulation = d3.forceSimulation([...sectors, ...categories])
            .force('link', d3.forceLink(links).id(d => d.id).distance(100))
            .force('charge', d3.forceManyBody().strength(-400))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collide', d3.forceCollide().radius(d => d.category ? 50 : 30).strength(0.7))
            .force('x', d3.forceX(width / 2).strength(0.1))
            .force('y', d3.forceY(height / 2).strength(0.1));

        const link = svg.append('g')
            .selectAll('line')
            .data(links)
            .enter()
            .append('line')
            .attr('stroke-width', 2)
            .attr('stroke', '#999');

        const node = svg.append('g')
            .selectAll('g')
            .data(sectors)
            .enter()
            .append('g')
            .call(drag(simulation))
            .on('click', handleClick);

        // Add logo SVG to each node
        node.each(function () {
            d3.select(this)
                .append('image')
                .attr('href', '/images/logo.svg')
                .attr('width', 50)
                .attr('height', 50)
                .attr('x', -25)
                .attr('y', -25);
        });

        const label = svg.append('g')
            .selectAll('text')
            .data(sectors)
            .enter()
            .append('text')
            .text(d => d.label)
            .attr('dx', 30)
            .attr('dy', '.35em')
            .style('font-size', '14px')
            .style('fill', '#2A0333')
            .style('pointer-events', 'none');

        simulation.on('tick', () => {
            link
                .attr('x1', d => d.source.x)
                .attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x)
                .attr('y2', d => d.target.y);

            node
                .attr('transform', d => `translate(${d.x},${d.y})`);

            label
                .attr('x', d => d.x)
                .attr('y', d => d.y);
        });

        function drag(simulation) {
            function dragstarted(event) {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                event.subject.fx = event.subject.x;
                event.subject.fy = event.subject.y;
            }

            function dragged(event) {
                event.subject.fx = event.x;
                event.subject.fy = event.y;
            }

            function dragended(event) {
                if (!event.active) simulation.alphaTarget(0);
                event.subject.fx = null;
                event.subject.fy = null;
            }

            return d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended);
        }

        function handleClick(event, d) {
            // Effet de clic : augmenter temporairement la taille du nœud
            const clickedNode = d3.select(this);
            clickedNode.select('image')
                .transition()
                .duration(200)
                .attr('width', 60)
                .attr('height', 60)
                .attr('x', -30)
                .attr('y', -30)
                .transition()
                .duration(200)
                .attr('width', 50)
                .attr('height', 50)
                .attr('x', -25)
                .attr('y', -25);

            // Dispatch l'événement de sélection
            dispatch('selectSector', d);
        }
    }

    function handleResize() {
        initGraph();
    }

    onMount(() => {
        initGraph();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
</script>

<div bind:this={container} class="graph-container">
    <svg id="graph"></svg>
</div>

<style>
    .graph-container {
        width: 100%;
        height: 600px;
        background-color: #FBFBFB;
        border: 1px solid #D7D7D7;
        border-radius: 10px;
        overflow: hidden;
    }

    #graph {
        width: 100%;
        height: 100%;
    }
</style>