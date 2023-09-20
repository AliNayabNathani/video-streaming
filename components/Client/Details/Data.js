import { BsArrowReturnLeft, BsClipboard, BsFileCheck, BsFillQuestionCircleFill, BsGear, BsPencilSquare, BsSearch } from "react-icons/bs";
import { DummyText } from "./Dummytext";
import { AiFillWarning, AiOutlineSlack, AiOutlineStock, AiOutlineUser, AiOutlineYoutube } from "react-icons/ai";
import { FaRecycle, FaWindows } from "react-icons/fa";
import { BiHomeAlt } from "react-icons/bi";
import { MdRateReview } from "react-icons/md";

export const MainItems = [
    {
        name: 'Dashboard',
        Icon: BiHomeAlt,
        to: '/Client/Dashboard'
    },
    {
        name: 'My Video',
        Icon: AiOutlineYoutube,
        to: '/Client/MyVideo'
    },
    {
        name: 'Analytics',
        Icon: AiOutlineStock,
        to: '/Client/Analytics'
    },
    {
        name: 'My Channels',
        Icon: AiOutlineSlack,
        to: '/Client/MyChannels'
    },
    {
        name: 'Support',
        Icon: BsGear,
        to: '/Client/Support'
    },
    {
        name: 'Submit Feedback',
        Icon: MdRateReview,
        to: '/Client/SubmitFeedback'
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
