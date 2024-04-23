import './styles.css';
import { format, formatDistanceToNowStrict } from 'date-fns';

const latestPrescriptionDate = new Date('April 13, 2024');

const result = formatDistanceToNowStrict(latestPrescriptionDate, {
  addSuffix: true,
});

const friendlyDate = format(latestPrescriptionDate, 'do MMMM');

const daysAgoText = `The last prescription was sent ${result} (${friendlyDate})`;

const latestPrescriptionText = document.querySelector(
  '#latest-prescription-text'
);
latestPrescriptionText.textContent = daysAgoText;
