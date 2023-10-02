import { BsArrowReturnLeft, BsClipboard, BsFileCheck, BsFillQuestionCircleFill, BsGear, BsPencilSquare, BsQuestionCircle, BsSearch } from "react-icons/bs";
import { AccountSetup, DummyText } from "./Dummytext";
import { AiFillWarning, AiOutlineSlack, AiOutlineStock, AiOutlineUser, AiOutlineYoutube } from "react-icons/ai";
import { FaGavel, FaRecycle, FaWindows } from "react-icons/fa";
import { BiHomeAlt, BiPhone } from "react-icons/bi";
import { MdRateReview } from "react-icons/md";

export const MainItems = [
    {
        name: 'Overview',
        Icon: BsSearch,
        to: '/Client/Overview'
    },
    {
        name: 'Dashboard',
        Icon: BiHomeAlt,
        to: '/Client/Dashboard'
    },
    {
        name: 'Upload Video',
        Icon: AiOutlineYoutube,
        to: '/Client/UploadVideo'
    },
    {
        name: 'My Channels',
        Icon: AiOutlineSlack,
        to: '/Client/MyChannels'
    },
    {
        name: 'Submit Feedback',
        Icon: MdRateReview,
        to: '/Client/SubmitFeedback'
    },
    {
        name: 'Analytics',
        Icon: AiOutlineStock,
        to: '/Client/Analytics'
    },
    {
        name: 'Support',
        Icon: BsGear,
        to: '/Client/Support'
    },
    {
        name: 'Legal',
        Icon: FaGavel,
        to: '',
        subItems: [{
            name: 'Content Policy',
            to: '/Client/ContentPolicy'
        },
        {
            name: 'Terms & Conditions',
            to: '/Client/Terms'

        },
        {
            name: 'Privacy Policy',
            to: '/Client/privacy'
        },
        {
            name: 'Copyrights / trademarks',
            to: '/Client/copyright'
        }],
    },
    {
        name: 'Frequently Asked Questions (FAQs)',
        Icon: BsQuestionCircle,
        to: '',
        subItems: [{
            name: 'Submission',
            to: '/Client/Submission'
        },
        {
            name: 'Account',
            to: '/Client/Account'
        },
        {
            name: 'Tax',
            to: '/Client/Tax'
        }]
    },
    {
        name: 'Contact Us',
        Icon: BiPhone,
        to: '/Client/Contact'
    }
];

export const SetupItems = [
    {
        name: 'Overview',
        Data: DummyText,
        Icon: BsSearch
    },
    {
        name: 'Account',
        Icon: AiOutlineUser,
        subItems: [
            {
                name: 'Complete Account Setup',
                Data: DummyText,
            },
            {
                name: 'Payee Setup',
                Data: DummyText,
            },
            {
                name: 'Company Profile',
                Data: DummyText,
            },
            {
                name: 'Bank and Tax Information',
                Data: DummyText,
            },
            {
                name: 'European Content Acquisition',
                Data: DummyText,
            },
            {
                name: 'Payment and Banking',
                Data: DummyText,
            },
            {
                name: 'Tax Information',
                Data: DummyText,
            },
            {
                name: 'VideeO direct tax profile',
                Data: DummyText,
            },
            {
                name: 'Billing Preferences',
                Data: DummyText,
            },
            {
                name: 'User and Roles',
                Data: DummyText,
            },
            {
                name: 'Invoices',
                Data: DummyText,
            },
        ],
    },
    {
        name: 'Bank and Tax Information',
        Icon: BsClipboard,
        subItems: [
            {
                name: 'Banking Information',
                Data: DummyText,
            },
            {
                name: 'Tax Information',
                Data: DummyText,
            },
            {
                name: 'European content acquisition',
                Data: DummyText,
            },
            {
                name: 'Billing Preferences',
                Data: DummyText,
            },
        ],
    },
    {
        name: 'Title Submission',
        Icon: BsFileCheck,
        subItems: [
            {
                name: 'Licensing consideration and title review',
                Data: DummyText,
            },
            {
                name: 'Submission Requirements',
                Data: DummyText,
            },
            {
                name: 'Available Locations',
                Data: DummyText,
            },
            {
                name: 'Create a Standalone Title',
                Data: DummyText,
            },
            {
                name: 'Create an Episode Title',
                Data: DummyText,
            },
            {
                name: 'Add files from Amazon S3',
                Data: DummyText,
            },
            {
                name: 'Categories',
                Data: DummyText,
            },
            {
                name: 'Genre Definition',
                Data: DummyText,
            },
        ],
    },
    {
        name: 'Changes Titles',
        Icon: FaRecycle,
        subItems: [
            {
                name: 'Add or remove seasons and episodes',
                Data: DummyText,
            },
            {
                name: 'Change Location Availability, pricing model, or availability dates',
                Data: DummyText,
            },
            {
                name: 'Available Locations',
                Data: DummyText,
            },
            {
                name: 'Create a Standalone Title',
                Data: DummyText,
            },
            {
                name: 'Create an Episode Title',
                Data: DummyText,
            },
            {
                name: 'Add files from Amazon S3',
                Data: DummyText,
            },
            {
                name: 'Categories',
                Data: DummyText,
            },
            {
                name: 'Genre Definition',
                Data: DummyText,
            },
        ],
    },
    {
        name: 'Asset Requirements',
        Icon: BsPencilSquare
    },
    {
        name: 'Dashboard and compensation',
        Icon: BiHomeAlt
    },
    {
        name: 'Promote Titles',
        Icon: BsArrowReturnLeft
    },
    {
        name: 'Errors and troubleshooting',
        Icon: AiFillWarning
    },
    {
        name: 'Video Tutorials',
        Icon: AiOutlineYoutube
    },
    {
        name: 'Frequently Asked questions (FAQs)',
        Icon: BsFillQuestionCircleFill
    },
    {
        name: 'Legal',
        Icon: FaWindows
    },
];

export const LinkItems = [
    {
        name: 'Overview',
        Data: DummyText,
        Icon: BsSearch
    },
    {
        name: 'Account',
        Icon: AiOutlineUser,
        subItems: [
            {
                name: 'Setup Account',
                Data: DummyText,
            },
            {
                name: 'Company Profile',
                Data: DummyText,
            },
            {
                name: 'User Roles',
                Data: DummyText,
            },
        ],
    },
    {
        name: 'Bank and Tax Information',
        Icon: BsClipboard,
        subItems: [
            {
                name: 'Banking Information',
                Data: DummyText,
            },
            {
                name: 'Tax Information',
                Data: DummyText,
            },
            {
                name: 'European content acquisition',
                Data: DummyText,
            },
            {
                name: 'Billing Preferences',
                Data: DummyText,
            },
        ],
    },
    {
        name: 'Title Submission',
        Icon: BsFileCheck,
        subItems: [
            {
                name: 'Licensing consideration and title review',
                Data: DummyText,
            },
            {
                name: 'Submission Requirements',
                Data: DummyText,
            },
            {
                name: 'Available Locations',
                Data: DummyText,
            },
            {
                name: 'Create a Standalone Title',
                Data: DummyText,
            },
            {
                name: 'Create an Episode Title',
                Data: DummyText,
            },
            {
                name: 'Add files from Amazon S3',
                Data: DummyText,
            },
            {
                name: 'Categories',
                Data: DummyText,
            },
            {
                name: 'Genre Definition',
                Data: DummyText,
            },
        ],
    },
    {
        name: 'Changes Titles',
        Icon: FaRecycle,
        subItems: [
            {
                name: 'Add or remove seasons and episodes',
                Data: DummyText,
            },
            {
                name: 'Change Location Availability, pricing model, or availability dates',
                Data: DummyText,
            },
            {
                name: 'Available Locations',
                Data: DummyText,
            },
            {
                name: 'Create a Standalone Title',
                Data: DummyText,
            },
            {
                name: 'Create an Episode Title',
                Data: DummyText,
            },
            {
                name: 'Add files from Amazon S3',
                Data: DummyText,
            },
            {
                name: 'Categories',
                Data: DummyText,
            },
            {
                name: 'Genre Definition',
                Data: DummyText,
            },
        ],
    },
    {
        name: 'Asset Requirements',
        Icon: BsPencilSquare
    },
    {
        name: 'Dashboard and compensation',
        Icon: BiHomeAlt
    },
    {
        name: 'Promote Titles',
        Icon: BsArrowReturnLeft
    },
    {
        name: 'Errors and troubleshooting',
        Icon: AiFillWarning
    },
    {
        name: 'Video Tutorials',
        Icon: AiOutlineYoutube
    },
    {
        name: 'Frequently Asked questions (FAQs)',
        Icon: BsFillQuestionCircleFill
    },
    {
        name: 'Legal',
        Icon: FaWindows
    },
];
