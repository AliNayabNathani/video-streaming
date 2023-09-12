import { Actions } from "../SmallReusableComponents/Action";
import { TableTemplate } from "./Table";

const ContentCreatorData = [
    {
        Creator_ID: '0012',
        Name: 'Clara',
        Gender: 'Female',
        Total_Videos_Published: '30',
        Subscribed_Users: '200',
        Status: 'Active',
    },
    {
        Creator_ID: '0014',
        Name: 'Matthew',
        Gender: 'Male',
        Total_Videos_Published: '25',
        Subscribed_Users: '150',
        Status: 'Suspended',
    },
    {
        Creator_ID: '0018',
        Name: 'Sophia',
        Gender: 'Female',
        Total_Videos_Published: '40',
        Subscribed_Users: '180',
        Status: 'Active',
    },
    {
        Creator_ID: '0022',
        Name: 'William',
        Gender: 'Male',
        Total_Videos_Published: '22',
        Subscribed_Users: '120',
        Status: 'Suspended',
    },
    {
        Creator_ID: '0026',
        Name: 'Oliver',
        Gender: 'Male',
        Total_Videos_Published: '18',
        Subscribed_Users: '90',
        Status: 'Active',
    },
    {
        Creator_ID: '0030',
        Name: 'Emma',
        Gender: 'Female',
        Total_Videos_Published: '35',
        Subscribed_Users: '210',
        Status: 'Suspended',
    },
    {
        Creator_ID: '0034',
        Name: 'Liam',
        Gender: 'Male',
        Total_Videos_Published: '28',
        Subscribed_Users: '160',
        Status: 'Active',
    },
    {
        Creator_ID: '0038',
        Name: 'Ava',
        Gender: 'Female',
        Total_Videos_Published: '45',
        Subscribed_Users: '220',
        Status: 'Suspended',
    },
    {
        Creator_ID: '0042',
        Name: 'Noah',
        Gender: 'Male',
        Total_Videos_Published: '20',
        Subscribed_Users: '110',
        Status: 'Active',
    },
    {
        Creator_ID: '0046',
        Name: 'Sophia',
        Gender: 'Female',
        Total_Videos_Published: '32',
        Subscribed_Users: '190',
        Status: 'Suspended',
    },
];

const ContentCreatorColumn = [
    'Creator_ID',
    'Name',
    'Gender',
    'Total_Videos_Published',
    'Subscribed_Users',
    'Status'
];

export default function ContentCreatorTable() {
    return (
        <TableTemplate data={ContentCreatorData} columns={ContentCreatorColumn} Actions={Actions} to="/ContentCreatorDetails" />
    );
}