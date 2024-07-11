
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities } from '../redux/actions/activityActions';
import { List, ListItem, ListItemText, Container } from '@material-ui/core';

const ActivityLog = () => {
  const dispatch = useDispatch();
  const activities = useSelector(state => state.activities.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <Container>
      <h2>Activity Log</h2>
      <List>
        {activities.map(activity => (
          <ListItem key={activity.id}>
            <ListItemText primary={activity.description} secondary={activity.timestamp} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ActivityLog;