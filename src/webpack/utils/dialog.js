import { fetchGet } from './fetch-options';

const dialogWindow = document.getElementById('dialogWindow'),
    nameElement = document.getElementById('name'),
    dialogConfirmButton = document.getElementById('dialogConfirmButton');

export function openDialogWindow() {
    dialogWindow.showModal();
    setRandomPlayerName(nameElement, dialogConfirmButton);
}

export function closeDialogWindow() {
    dialogWindow.close();
}


function setRandomPlayerName(input, confirmButton) {
    input.disabled = true;
    confirmButton.disabled = true;

    fetchGet('/api/getRandomPlayerName')
        .then((res) => {
            input.value = res[0];
            input.disabled = false;
            confirmButton.disabled = false;
        });
}
