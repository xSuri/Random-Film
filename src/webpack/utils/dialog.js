import { fetchGet } from './fetch-options';

const dialogWindow = document.getElementById('dialogWindow'),
    nameElement = document.getElementById('name'),
    dialogConfirmButton = document.getElementById('dialogConfirmButton');

export function openDialogWindow() {
    dialogWindow.showModal();
    getRandomPlayerName(nameElement, dialogConfirmButton);
}

export function closeDialogWindow() {
    dialogWindow.close();
}


function getRandomPlayerName(input, confirmButton) {
    input.disabled = true;
    confirmButton.disabled = true;

    //start load
    fetchGet('/api/getRandomPlayerName')
        .then((res) => {
            // stop load
            input.value = res[0];
            input.disabled = false;
            confirmButton.disabled = false;
        })
}