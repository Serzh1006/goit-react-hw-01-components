import PropTypes from 'prop-types';
import css from './transaction.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr className={css.trhead}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(itemObj => {
          const { id, type, amount, currency } = itemObj;
          const getIndex = items.indexOf(itemObj);
          if (getIndex % 2 !== 0) {
            return (
              <tr
                className={css.trbody}
                key={id}
                style={{ backgroundColor: 'rgba(147, 172, 226,0.4)' }}
              >
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          }
          return (
            <tr
              className={css.trbody}
              key={id}
              style={{ backgroundColor: 'white' }}
            >
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
