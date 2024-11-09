function redireccionar(url) {
    window.location.href = url;
}


function show_Content(li_ID, div_Content) {
            const allDivs = document.querySelectorAll('.content');
            allDivs.forEach(div => {
                div.style.display = 'none';
            });

            const targetDiv = document.getElementById(div_Content);
            if (targetDiv) {
                targetDiv.style.display = 'block';
            }

            const allLi = document.querySelectorAll('.li_Content');
            allLi.forEach(li => {
                li.style.fontWeight = 'normal';
            });

            const targetLi = document.getElementById(li_ID);
            if (targetLi) {
                targetLi.style.fontWeight = 'bold';
            }

            


        }




