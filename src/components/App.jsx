import user from '../data/user';
import data from '../data/data';
// import transactions from '../data/transactions';
// import friends from '../data/friends';
import Profile from './Profile/profile';
import Statistics from './Statistics/statistics';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
