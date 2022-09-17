const fontSize = 14;
const fontWidth = 10;

type CounterProps = {
  count?: number;
};

export default ({ count = 0 }: CounterProps) => {
  const str = count.toString(10);
  const nextCount = count + 1;
  const nextStr = nextCount.toString(10);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={fontSize * nextStr.length + 5}
      height="16"
    >
      <defs>
        <style type="text/css">{`text{font-size: ${fontSize}px;}`}</style>
      </defs>
      <g>
        {Array.from(nextStr)
          .map((_, n) => n + 1)
          .map((n) => (
            <text
              key={n}
              x={
                (n - 1) * fontWidth +
                (str.length < nextStr.length ? fontWidth : 0)
              }
              y={fontSize}
            >
              {str[n - 1]}
              {str[n - 1] != nextStr[n - 1] && (
                <animate
                  attributeName="y"
                  from={fontSize}
                  to="-4"
                  begin={(str.length - n) * 300 + 400 + 'ms'}
                  dur="700ms"
                  fill="freeze"
                />
              )}
            </text>
          ))}

        {Array.from(nextStr)
          .map((_, n) => n + 1)
          .map((n) => (
            <text key={n} x={(n - 1) * fontWidth} y="30">
              {nextStr[n - 1]}
              {str[n - 1] != nextStr[n - 1] && (
                <animate
                  attributeName="y"
                  from="30"
                  to={fontSize}
                  begin={(str.length - n) * 300 + 500 + 'ms'}
                  dur="700ms"
                  fill="freeze"
                />
              )}
            </text>
          ))}
      </g>
    </svg>
  );
};
