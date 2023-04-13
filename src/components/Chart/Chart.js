import './Chart.css';

import ChartBar from './ChartBar';

const Chart = ({dataPoints}) => {
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
    const totalMaxValuePossible = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {dataPoints.map(dataPoint => (
                <ChartBar 
                    value={dataPoint.value} 
                    maxValue={totalMaxValuePossible} 
                    label={dataPoint.label} 
                    key={dataPoint.label}
                />
            ))}
        </div>
    )
}

export default Chart;