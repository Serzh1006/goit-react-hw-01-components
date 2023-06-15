import PropTypes, { object } from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <ul class="stat-list">
        <li key={stats[0].id} class="item">
          <span class="label">{stats[0].label}</span>
          <span class="percentage">{stats[0].percentage}%</span>
        </li>
        <li key={stats[1].id} class="item">
          <span class="label">{stats[1].label}</span>
          <span class="percentage">{stats[1].percentage}%</span>
        </li>
        <li key={stats[2].id} class="item">
          <span class="label">{stats[2].label}</span>
          <span class="percentage">{stats[2].percentage}%</span>
        </li>
        <li key={stats[3].id} class="item">
          <span class="label">{stats[3].label}</span>
          <span class="percentage">{stats[3].percentage}%</span>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(object).isRequired,
};

// Ошибка
// Warning: Failed prop type:
//  Invalid prop `stats` of type `array` supplied to`Statistics`, expected`object`.

// PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired,
//   }).isRequired,
