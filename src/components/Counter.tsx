const fontSize = 14;
const fontWidth = 8.5;
const lineHeight = 14;
const y_1 = -(lineHeight - fontSize) / 2 - 1;
const y1 = (lineHeight + fontSize) / 2;
const y2 = 2 * lineHeight - (lineHeight - fontSize) / 2;
const yOffset = 0;

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
      width={fontWidth * nextStr.length}
      height={lineHeight}
      viewBox={[
        0,
        yOffset,
        fontWidth * nextStr.length,
        lineHeight + yOffset,
      ].join('\x20')}
    >
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html: `text{font-size:${fontSize}px; fill:#24292f; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";}`,
          }}
        />
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
              y={y1}
            >
              {str[n - 1]}
              {str[n - 1] != nextStr[n - 1] && (
                <animate
                  attributeName="y"
                  from={y1}
                  to={y_1}
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
            <text key={n} x={(n - 1) * fontWidth} y={y2}>
              {nextStr[n - 1]}
              {str[n - 1] != nextStr[n - 1] && (
                <animate
                  attributeName="y"
                  from={y2}
                  to={y1}
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
