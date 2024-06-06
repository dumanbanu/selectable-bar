import transformToGrayScannerIcon from '../icons/transformToGrayScannerIcon.svg';
import transformToBlueScannerIcon from '../icons/transformToBlueScannerIcon.svg';
import transformToBlueSignAndStamp from '../icons/transformToBlueSignAndStamp.svg';
import transformToGraySignAndStamp from '../icons/transformToGraySignAndStamp.svg';
import transformToBlueAdvancedFilter from '../icons/transformToBlueAdvancedFilter.svg';
import transformToGrayAdvancedFilter from '../icons/transformToGrayAdvancedFilter.svg';
import transformToBlueExportAndShare from '../icons/transformToBlueExportAndShare.svg';
import transformToGrayExportAndShare from '../icons/transformToGrayExportAndShare.svg';
import transformToBlueBatchAndScanning from '../icons/transformToBlueBatchAndScanning.svg';
import transformToGrayBatchAndScanning from '../icons/transfromToGrayBatchAndScanning.svg';
import scannerDocumentIMG from '../img/document_scanner_phone.svg';
import commonPhoneIMG from '../img/phone.svg';
import emptyPhoneIMG from '../img/empty_phone.svg';
import lastPhone from '../img/last-phone.svg';
import sign from '../img/sign.svg';
import completed from '../img/completed.svg';
import previewFirst from '../img/preview-first.svg';
import previewSecond from '../img/preview-second.svg';
import previewThird from '../img/preview-third.svg';
import lightLeft from '../img/light-left.svg';
import lightRight from '../img/light-right.svg';
import lastPhoneArrow from '../img/last-phone-arrow.svg';
import lastPhoneJPG from '../img/last-phone-jpg.svg';
import lastPhonePDF from '../img/last-phone-pdf.svg';
import lastPhoneTXT from '../img/last-phone-txt.svg';

export enum AnimationTypes {
  fadeIn = 'FADE_IN',
  slideUp = 'SLIDE_UP',
}

export default interface TabBarItem {
  id?: number;
  title?: string;
  subtitle?: string;
  description?: string;
  buttonContent?: string;
  iconActive?: string;
  iconPassive?: string;
  image?: string;
  nextAnimation?: AnimationTypes | boolean;
  nextAnimationSource?: Array<string>;
}

export const tabBarOptionsList: TabBarItem[] = [
  {
    id: 1,
    title: 'Document Scanner',
    subtitle: 'Scan with Ease',
    description:
      'Scan any document instantly with your mobile device by just a few steps. Save as PDF, JPG, ZIP, TXT and Word format.',
    buttonContent: 'Learn More',
    iconActive: transformToGrayScannerIcon,
    iconPassive: transformToBlueScannerIcon,
    image: scannerDocumentIMG,
    nextAnimation: false,
    nextAnimationSource: [],
  },
  {
    id: 2,
    title: 'Sign & Stamp',
    subtitle: 'One-Tap Focus',
    description:
      'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
    buttonContent: 'Learn More',
    iconActive: transformToGraySignAndStamp,
    iconPassive: transformToBlueSignAndStamp,
    image: commonPhoneIMG,
    nextAnimation: AnimationTypes.fadeIn,
    nextAnimationSource: [sign, completed],
  },
  {
    id: 3,
    title: 'Batch Scanning',
    subtitle: 'Multiple Page Scan',
    description:
      'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
    buttonContent: 'Learn More',
    iconActive: transformToGrayBatchAndScanning,
    iconPassive: transformToBlueBatchAndScanning,
    image: emptyPhoneIMG,
    nextAnimation: AnimationTypes.slideUp,
    nextAnimationSource: [previewFirst, previewSecond, previewThird],
  },
  {
    id: 4,
    title: 'Advanced Filters',
    subtitle: 'Unique Filters',
    description:
      'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
    buttonContent: 'Learn More',
    iconActive: transformToGrayAdvancedFilter,
    iconPassive: transformToBlueAdvancedFilter,
    image: commonPhoneIMG,
    nextAnimation: AnimationTypes.fadeIn,
    nextAnimationSource: [lightLeft, lightRight],
  },

  {
    id: 5,
    title: 'Export & Share',
    subtitle: 'All-Round Conversion',
    description:
      'Export your scans as PDF,JPG,ZIP,TXT and Word.Export your scans as PDF,JPG,ZIP,TXT and Word.   Export your scans as PDF,JPG,ZIP,TXT and Word.',
    buttonContent: 'Learn More',
    iconActive: transformToGrayExportAndShare,
    iconPassive: transformToBlueExportAndShare,
    image: lastPhone,
    nextAnimation: AnimationTypes.slideUp,
    nextAnimationSource: [
      lastPhoneArrow,
      lastPhonePDF,
      lastPhoneJPG,
      lastPhoneTXT,
    ],
  },
];
