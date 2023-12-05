import { IMG_STANDART_XLARGE } from '../../constants/api';

import { getDataApi } from '../../utils/getDataApi';

import { ROOT_MODAL } from '../../constants/root';

import imgCloseWhite from './img/close-whigt.svg';

import './Characters.css';

class Characters {
    renderContent(data) {
        let htmlContent = '';

        data.forEach(({ name, thumbnail: {path, extension} }) => {
            const imgSrc =  path + '/' + IMG_STANDART_XLARGE + '.' + extension;

            htmlContent += `
                <li class="characters__item">
                    <img class="img_cover characters__img" src="${imgSrc}">
                    <span class="characters__name">${name}</span>
                </li>
             `;
        });

       const htmlWrapper = `
            <div class="wrapper">
                <ul class="characters__container">
                    ${htmlContent}
                </ul>
                <button 
                    class="btn bg_contain characters__close" 
                    onclick="modal.innerHTML = ''"
                    style="background-image: url(${imgCloseWhite})"
                ></button>
            </div>
       ` ;

        ROOT_MODAL.innerHTML = htmlWrapper; 
    }; 

    renderNotification() {
        console.log('Данных нет');
    }

    async render(uri) {
        const data = await getDataApi.getData(uri);
     
        data.length ? this.renderContent(data) : this.renderNotification();
    }
}

export default new Characters();