/**
 * prompt a message at the top center of the site
 * @param type the type of prompt.1:success 2:info 3:error 4:warning
 * @param message the message you want to show
 * @param last the time it stops on the screen
 */
function uprompt(type, message, last) {
    switch (type) {
        case 1:
            var root = document.getElementById('Messages');
            if (root != undefined) {
                var el = document.createElement('Message');
                el.classList.add('success', 'float1');
                el.innerHTML = message;
                el.style.right = "-300px";
                root.appendChild(el);
                setTimeout(() => {
                    el.style.right = '0';
                });
                setTimeout(() => {
                    el.style.right = -999 + 'px';
                }, last * 1000);
                setTimeout(() => {
                    el.style.display = 'none';
                }, last * 1000 + 250);
            }
            break;
        case 2:
            var root = document.getElementById('Messages');
            if (root != undefined) {
                var el = document.createElement('Message');
                el.classList.add('info', 'float1');
                el.innerHTML = message;
                el.style.right = "-300px";
                root.appendChild(el);
                setTimeout(() => {
                    el.style.right = '0';
                });
                setTimeout(() => {
                    el.style.right = -999 + 'px';
                }, last * 1000);
                setTimeout(() => {
                    el.style.display = 'none';
                }, last * 1000 + 250);
            }
            break;
        case 3:
            var root = document.getElementById('Messages');
            if (root != undefined) {
                var el = document.createElement('Message');
                el.classList.add('error', 'float1');
                el.innerHTML = message;
                el.style.right = "-300px";
                root.appendChild(el);
                setTimeout(() => {
                    el.style.right = '0';
                });
                setTimeout(() => {
                    el.style.right = -999 + 'px';
                }, last * 1000);
                setTimeout(() => {
                    el.style.display = 'none';
                }, last * 1000 + 250);
            }
            break;
        case 4:
            var root = document.getElementById('Messages');
            if (root != undefined) {
                var el = document.createElement('Message');
                el.classList.add('warning', 'float1');
                el.innerHTML = message;
                el.style.right = "-300px";
                root.appendChild(el);
                setTimeout(() => {
                    el.style.right = '0';
                });
                setTimeout(() => {
                    el.style.right = -999 + 'px';
                }, last * 1000);
                setTimeout(() => {
                    el.style.display = 'none';
                }, last * 1000 + 250);
            }
            break;
        default:
            break;
    }
}
//# sourceMappingURL=ufuncs.js.map