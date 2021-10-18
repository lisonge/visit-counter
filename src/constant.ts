export const default_svg_template = /*html*/ `<svg  xmlns='http://www.w3.org/2000/svg' viewBox="0 0 800 600">
<g>
    <style>
        .text--line {
            font-size: 0.5em;
        }

        svg {
            position: absolute;
            width: 100%;
            height: 100%;
            background-size: 0.12em 100%;
            font: 16em/1 Arial;
        }

        .text-copy {
            fill: none;
            stroke: white;
            stroke-dasharray: 7% 28%;
            stroke-width: 3px;
            animation: stroke-offset 3s infinite linear;
        }

        .text-copy:nth-child(1) {
            stroke: #360745;
            stroke-dashoffset: 7%;
        }

        .text-copy:nth-child(2) {
            stroke: #D61C59;
            stroke-dashoffset: 14%;
        }

        .text-copy:nth-child(3) {
            stroke: #E7D84B;
            stroke-dashoffset: 21%;
        }

        .text-copy:nth-child(4) {
            stroke: #EFEAC5;
            stroke-dashoffset: 28%;
        }

        .text-copy:nth-child(5) {
            stroke: #1B8798;
            stroke-dashoffset: 35%;
        }

        @keyframes stroke-offset {
            50% {
                stroke-dashoffset: 35%;
                stroke-dasharray: 0 87.5%;
            }
        }
    </style>
</g>
<symbol id="s-text">
    <text text-anchor="middle" x="50%" y="68%">
        {{count}}
    </text>
</symbol>
<g class="g-ants">
    <use href="#s-text" class="text-copy"></use>
    <use href="#s-text" class="text-copy"></use>
    <use href="#s-text" class="text-copy"></use>
    <use href="#s-text" class="text-copy"></use>
    <use href="#s-text" class="text-copy"></use>
</g>
</svg>`;
export const default_count_key = 'default_count_key';
