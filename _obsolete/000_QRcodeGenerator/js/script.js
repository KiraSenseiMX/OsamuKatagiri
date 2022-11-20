console.log("script.js is running")

const form = document.getElementById('generate-form')
const qr = document.getElementById('qrcode')

const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearUI();

    const url = document.getElementById('url').value
    const size = document.getElementById('size').value

    console.log(url, size)

    if (url === '') {
        var toastHTML = '<span class="black-text">Please enter an URL</span>';
        M.toast({html: toastHTML, classes: 'rounded yellow'});
    } else {
        showSpinner()

        setTimeout(() => {
            hideSpinner()
            generateQRCode(url, size)
            
            setTimeout(() => {
                const saveUrl = qr.querySelector('img').src
                createSaveBtn(saveUrl)
            }, 50)
        }, 1000)
    }
}

const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
    })
}

const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block'
}

const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none'
}

const clearUI = () => {
    qr.innerHTML = '';
    const saveLink = document.getElementById('save-link')
    if(saveLink){
        saveLink.remove();
    }
}

const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a')
    link.id = 'save-link'
    link.classList = 'waves-effect waves-light btn'
    link.href = saveUrl
    link.download = 'qrcode'
    link.innerHTML = '<i class="material-icons left">save</i>Save Image'
    document.getElementById('qrcode').appendChild(link)
}

hideSpinner()

form.addEventListener('submit', onGenerateSubmit)