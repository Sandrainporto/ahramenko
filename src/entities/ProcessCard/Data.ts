import chat from './../../assets/icons/chat.webp';
import camera from './../../assets/icons/camera.webp';
import retouch from './../../assets/icons/retouch.webp';
import photos from './../../assets/icons/photos.webp';

type ProcessTypes = {
  heading: string;
  icon: string;
  description: string;
};

export const process: ProcessTypes[] = [
  {
    heading: 'Консультация',
    icon: chat,
    description:
      'Обсудим детали фотосъемки, основные условия работы и моменты, которые Вы бы хотели запечатлить.',
  },
  {
    heading: 'Фотосъемка',
    icon: camera,
    description:
      'Запечатлю Ваши сокровенные эмоции и ценные моменты в комфотной для Вас обстановке, в стиле лайвстайл.',
  },
  {
    heading: 'Ретушь',
    icon: retouch,
    description:
      'Проведу цветокоррекцию по самостоятельно отобранным фото, возможна коррекция в черно-белых оттенках',
  },
  {
    heading: 'Отдача материала',
    icon: photos,
    description:
      'Обработанные 50-70 снимков Вы получите через 3 недели со дня фотосессии',
  },
];
