import { VictoryPie } from 'victory'

interface PieProps {
  rightCount: number
  totalCount: number
}

const PieChart = ({ rightCount, totalCount }: PieProps) => {
  return (
    <VictoryPie
      colorScale={['#00c896', '#004ab5']}
      data={[
        { x: '정답', y: rightCount },
        { x: '오답', y: totalCount - rightCount },
      ]}
      labelRadius={70}
      labels={({ datum }) => `${datum.x}: ${datum.y}`}
      style={{ labels: { fontSize: 18, fill: '#f9fefc' } }}
    />
  )
}

export default PieChart
