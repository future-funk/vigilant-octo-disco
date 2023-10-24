const getTooltipTemplate = ({
  color,
  series,
  x,
  y,
}: Omit<Highcharts.TooltipFormatterContextObject, 'y'> & { y: string }) => `
    <div>
        <span>${x}</span><br/>
            <span style="color:${color}">●</span> 
               ${series.name}: <b>${y}</b><br/>
        </div>
`

export default getTooltipTemplate
