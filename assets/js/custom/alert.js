function alert2Btn(id, title, caption, btnAccept, btnDismiss) {
    $(`#${id}`).html(
        `
        <div class="alert-container animate__animated animate__fadeIn">
            <div class="alert-content">
                <div class="alerts animate__animated animate__bounceIn">
                    <div class="alert-body">
                        <h5 class="alert-title">${title}</h5>
                        <p class="alert-caption">${caption}</p>
                    </div>
                    <div class="alert-footer">
                        <button class="btn-custom btn-dismiss">${btnDismiss}</button>
                        <button class="btn-custom btn-accept">${btnAccept}</button>
                    </div>
                </div>
            </div>
        </div>
        `
    );
}

function alert1Btn(id, title, caption, btnAccept) {
    $(`#${id}`).html(
        `
        <div class="alert-container animate__animated animate__fadeIn">
            <div class="alert-content">
                <div class="alerts animate__animated animate__bounceIn">
                    <div class="alert-body">
                        <h5 class="alert-title">${title}</h5>
                        <p class="alert-caption">${caption}</p>
                    </div>
                    <div class="alert-footer">
                        <button class="btn-custom btn-accept btn-accept-single">${btnAccept}</button>
                    </div>
                </div>
            </div>
        </div>
        `
    );
}

function alertForm(id, title, caption, btnAccept) {
    $(`#${id}`).html(
        `
        <div class="alert-container animate__animated animate__fadeIn">
            <div class="alert-content">
                <div class="alerts animate__animated animate__bounceIn">
                    <div class="alert-body">
                        <form>
                            <h5 class="alert-title">${title}</h5>
                            <p class="alert-caption">${caption}</p>
                            <input type="text" class="mt-4 form-control form-control-sm" id="form">
                        </form>
                    </div>
                    <div class="alert-footer">
                        <button class="btn-custom btn-accept btn-accept-single">${btnAccept}</button>
                    </div>
                </div>
            </div>
        </div>
        `
    );
}