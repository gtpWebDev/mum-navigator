import './styles.css';
import { format, formatDistanceToNowStrict } from 'date-fns';

// 1. UPDATE WHETHER TO SHOW RECEIVED OR ORDERED - USE MOST RECENT
const showOrdered = false;
// 2. UPDATE ORDERED DATE HERE IF RELEVANT
const latestOrderedDate = new Date('April 13, 2024');
// 3. UPDATE RECEIVED DATE HERE IF RELEVANT
const latestReceivedDate = new Date('April 23, 2024');

const latestPrescriptionText = document.querySelector(
  '#latest-prescription-text'
);
let constructedText = '';

if (showOrdered) {
  const orderedDaysAgo = formatDistanceToNowStrict(latestOrderedDate, {
    addSuffix: true,
  });
  const friendlyOrderedDate = format(latestOrderedDate, 'do MMMM');
  constructedText = `The last prescription was ordered ${orderedDaysAgo} (${friendlyOrderedDate}). It has not arrived yet.`;
} else {
  const receivedDaysAgo = formatDistanceToNowStrict(latestReceivedDate, {
    addSuffix: true,
  });
  const friendlyReceivedDate = format(latestReceivedDate, 'do MMMM');
  constructedText = `The last prescription arrived ${receivedDaysAgo} (${friendlyReceivedDate}). You have not ordered a new prescription since then.`;
}

latestPrescriptionText.textContent = constructedText;
