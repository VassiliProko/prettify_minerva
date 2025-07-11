// only run script if extension is turned on (popup)
chrome.storage?.local?.get('enabled', (data) => {

if (!data.enabled) return;

// inject hide.css
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = chrome.runtime.getURL('hide.css');
document.head.appendChild(link);

const site = window.location.hostname;
const path = window.location.pathname;

// Add Custom CSS
const Add_Custom_Style = (css) => {
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
};


const mcgill_logo = chrome.runtime.getURL("images/mcgill_logo.svg");

// Only run custom styles on McGill Minerva portal
if (site === "horizon.mcgill.ca") {
    Add_Custom_Style(`
        @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
        
        * {
            font-family: "Inter" !important;
        }

        div.headerwrapperdiv {
            background-image: none !important;
            background-color: transparent !important;
            padding: 0;
        }

        h1 {
            font-size: 1.5rem !important;
            left: 1% !important;
            margin: 0 !important;
            margin-right: 10px;
            position: static !important;
        }

        h2 {
            color: #ED1B2F !important;
            font-size: 1.5rem !important;
            padding-top: 0.5rem !important;
            padding-left: 0.8rem !important;
        }
        
        h3 {
            color: black !important;
            margin-top: 0;
        }
    
        h5 {
        margin-left: 1.5rem;
        }

        .header-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .header-wrapper .pageheaderlinks2 {
            flex: 1;
        }

        .header-wrapper .headerlinksdiv2 {
            flex: 1;
            text-align: right;
        }

        #top-bar {
            background: linear-gradient(to right, #ED1B2F 45%, #D554AF);
            display: flex;
            padding: 5px 45px;
            align-items: center;
        }

        .utility {
            margin-left: auto;
            color: white;
        }
        
        .utility .submenulinktext2 {
            color: white !important;
            font-size: 1rem !important;
        }

        #bottom-bar {
            background-color: white;
            padding: 20px;
            border-bottom: solid 1px #9D9D9D;
        }

        .menu-links {
            align-items: center;
            margin-top: 0;
        }

        .menu-links map {
            display: block;
            height: 40px;
            line-height: 1;
            margin: 0;
            padding: 0;
            }

        map[name="Module_Navigation_Links_H"] {
            font-size: 0;
        }

        .bgtabon, .bgtaboff, .bgtaboff:hover {
            display: none !important;
            // background-color: transparent !important;
        }

        div.headerwrapperdiv td.tabon, div.headerwrapperdiv td.taboff {
            border: none !important;
            background-color: transparent;
            font-weight: normal;
            font-size: 1rem;
            padding: 10px 2px !important;
            // padding: clamp(8px, 9px, 10px) clamp(12px, 1vw, 20px) !important;
        
        }
    
        div.headerwrapperdiv td.tabon:hover,
        div.headerwrapperdiv td.taboff:hover {
            background-color: transparent !important;
            background-image: none !important;
        }

        div.headerwrapperdiv td.tabon * {
            color: #000000;
            font-weight: bold;
        }

        .taboff a, .tabon a {
            width: 100% !important;
            height: 100% !important;
            padding: 5px 10px !important;
            text-decoration: none !important;
        }

        .search-form {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .search-form input {
            padding: 8px !important;
            font-size: 14px;
        }

        .search-form button {
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
            display: flex;
            align-items: center; 
        }

        div.pagebodydiv {
            font-size: 1rem !important;
            background-image: none !important;
            margin: 0 !important;
            padding: 0.5rem 1.2rem !important;
        }

        div.pagebodydiv div {
            align-items: normal !important;
        }

        .mpdefault .submenulinktext2 {
            color: #234EA4 !important;
            font-size: 1rem !important;
        }

        .menulinkdesctext {
            max-width: 500px;
        }
        
        div.pagefooterdiv {
            margin: 0.25rem 0.5rem !important;
            padding: 1rem 0rem;
        }

        .custom-footer-text {
            font-size: 0.8rem;
            color:rgb(106, 106, 106);
        }

        .banner_copyright {
            padding: 2rem 0rem;
        }

        div.banner_copyright div {
            width: auto !important;
            max-width: 700px !important;
            margin: 10px 29px !important;
            background-color: #d7d7d7 !important;
        }

        span.infotext div {
            width: auto !important;
            max-width: 700px !important;
            margin: -4px 8px !important;
            background-color: #d7d7d7 !important;
        }

        mark {
            background-color: #fff9df !important;
            border-left: #ffda16 solid 10px;
            padding-left: 3px;
        }

        input {
            padding: 2px 16px !important;
            border: black solid 1px;
            border-radius: 5px;
        }
        
        @media print {
            .headerwrapperdiv, .no-print {
                display: none;
            }
        
        }

    `);


        // table {
        //     border-collapse: separate !important;
        //     border-spacing: 0 !important;
        //     border: none !important;
        //     font-size: 14px !important;
        // }

        // td {
        //     padding: 5px 5px !important;
        // }

    const headerWrapper = document.querySelector("div.headerwrapperdiv");

    if (headerWrapper) {
        const newHeader = document.createElement("div");
        newHeader.innerHTML = `
            <div id="top-bar">
                <img src="${mcgill_logo}" alt="McGill Logo" style="height: 60px; margin-right: 10px;">
                <h1>
                    Minerva
                </h1>
                <div class="utility">
                </div>
            </div>
            <div id="bottom-bar">
                <div class="header-wrapper">
                    <div class="menu-links">
                    </div>
                    <div class="search-bar">
                        <form action="/pban1/twbksrch.P_ShowResults" method="post" class="search-form">
                            <input
                                type="text"
                                name="KEYWRD_IN"
                                id="keyword_in_id"
                                size="20"
                                maxlength="65"
                                placeholder="Search..."
                            />
                            <button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-search-icon lucide-search">
                                <path d="m21 21-4.34-4.34"/>
                                <circle cx="11" cy="11" r="8"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `;

        const topBar = newHeader.querySelector("#top-bar");
        const bottomBar = newHeader.querySelector("#bottom-bar");

        const navLinks = document.querySelector("div.headerlinksdiv span.pageheaderlinks2"); 
        const utility = document.querySelector("span.pageheaderlinks");


        if (utility) topBar.querySelector(".utility").innerHTML = utility.innerHTML;
        if (navLinks) bottomBar.querySelector(".menu-links").innerHTML = navLinks.innerHTML;
        
        
        headerWrapper.innerHTML = "";
        headerWrapper.appendChild(newHeader);
    }

    const releaseText = document.querySelector('.releasetext');

    if (releaseText) {
        const newFooterText = document.createElement("span");
        newFooterText.textContent = " 🖤 Enhanced with Prettify Minerva";
        newFooterText.classList.add("custom-footer-text");

        releaseText.insertAdjacentElement('afterend', newFooterText);
    }

    document.querySelector(".pagefooterdiv").classList.add("no-print");
    document.querySelector(".banner_copyright").classList.add("no-print");


    (function () {
        // Only run on Minerva pages
        if (!window.location.href.includes("horizon.mcgill.ca")) return;
    
        // Ignore main menu page (where sidebar will live)
        const isMainMenu = window.location.href.includes("bmenu.P_MainMnu");
        const isLogin = window.location.href.includes("P_WWWLogin");

        // Get title
        const h2 = document.querySelector('h2, .pageheader, .pagetitle'); 
        if (!h2 || isMainMenu || isLogin) return;
    
        // Make sure parent td is positioned relatively
        const td = h2.closest('td');
        if (td) {
            td.style.position = 'relative';
        }

        // Create the "Save to Quick Links" button
        const quickLinksButton = document.createElement('button');
        quickLinksButton.style.position = 'absolute';
        quickLinksButton.style.right = '1rem';
        quickLinksButton.style.top = '60%';
        quickLinksButton.style.transform = 'translateY(-50%)';
        quickLinksButton.style.fontSize = '0.9rem';
        quickLinksButton.style.cursor = 'pointer';
        quickLinksButton.style.padding = '0.3rem 0.6rem';
        quickLinksButton.style.border = '1px solid #ccc';
        quickLinksButton.style.borderRadius = '4px';
        quickLinksButton.style.backgroundColor = '#f5f5f5';
        quickLinksButton.classList.add('no-print');

        const titleNode = h2.cloneNode(true);
        titleNode.querySelector('button')?.remove();
        const title = titleNode.textContent.trim();
        
        const menuName = getMenuName() || '';

        const urlObj = new URL(window.location.href);
        urlObj.searchParams.set('name', menuName);
        const url = urlObj.toString();

        let saved = JSON.parse(localStorage.getItem('myQuickLinks') || '[]');
        let isSaved = saved.some(link => link.url === url);

        quickLinksButton.textContent = isSaved ? 'Remove from Quick Links' : 'Save to Quick Links';

        quickLinksButton.onclick = () => {
            saved = JSON.parse(localStorage.getItem('myQuickLinks') || '[]');
            isSaved = saved.some(link => link.url === url);

            if (isSaved) {
                saved = saved.filter(link => link.url !== url);
                localStorage.setItem('myQuickLinks', JSON.stringify(saved));
                quickLinksButton.textContent = 'Save to Quick Links';
            } else {
                saved.push({ text: title, url });
                localStorage.setItem('myQuickLinks', JSON.stringify(saved));
                quickLinksButton.textContent = 'Remove from Quick Links';
            }
        };
    
        h2.appendChild(quickLinksButton);
    
        // Helper: Extract menu name from URL if possible
        function getMenuName() {
        const match = window.location.href.match(/name=([^&]+)/);
        return match ? match[1] : '';
        }
    })();


    // deletes useless td's in header area
    const h2 = document.querySelector('h2');
    const row = h2?.closest('tr');
    if (row) {
    const cells = row.querySelectorAll('td.pldefault');
    cells.forEach((td, index) => {
        if (index > 0) td.remove();
    });
    }

    document.documentElement.style.setProperty('visibility', 'visible', 'important');
}

// main menu

if ((window.location.href.includes("twbkwbis.P_GenMenu?name=bmenu.P_MainMnu")) && (site === "horizon.mcgill.ca")) {
    
    Add_Custom_Style(`
        h1 { 
        font-size: 5rem;
        }

    `)
    
    const pageBodyDiv = document.querySelector('.pagebodydiv');

    if (pageBodyDiv) {

        // Create a wrapper for the main content
        const mainContent = document.createElement('div');
        mainContent.style.flex = '1';
        mainContent.style.paddingRight = '1rem';

        // Move all existing children into mainContent
        while (pageBodyDiv.firstChild) {
            mainContent.appendChild(pageBodyDiv.firstChild);
        }

        // Create the sidebar
        const sidebar = document.createElement('div');
        sidebar.style.width = '250px';
        sidebar.style.border = '1px solid #ccc';
        sidebar.style.padding = '0rem 1rem';
        
        const sidebarheader = document.createElement('div');
        sidebarheader.style.display = 'flex';
        sidebarheader.style.justifyContent = 'space-between';
        sidebarheader.style.marginTop = '1rem';
        
        // Create the <h3>
        const title = document.createElement('h3');
        title.textContent = 'Quick Links';
        
        // Create the button
        const editQuickLinks = document.createElement('button');
        editQuickLinks.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-icon lucide-pencil" title="Edit Quick Links"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>';
        editQuickLinks.style.cursor = 'pointer';
        editQuickLinks.style.border = 'none';
        editQuickLinks.style.display = 'flex';
        editQuickLinks.style.background = 'none';



        editQuickLinks.onclick = () => {
            const savedLinks = JSON.parse(localStorage.getItem('myQuickLinks') || '[]');

            // Clear sidebar and prepare for editable mode
            sidebar.innerHTML = '';
            
            const sidebarheader = document.createElement('div');
            sidebarheader.style.display = 'flex';
            sidebarheader.style.justifyContent = 'space-between';
            sidebarheader.style.alignItems = 'center';
            sidebarheader.style.marginTop = '1rem';

            const headerText = document.createElement('div');
            headerText.textContent = 'Edit Quick Links';
            sidebarheader.appendChild(headerText);

            const doneBtn = document.createElement('button');
            doneBtn.textContent = 'Done';
            doneBtn.style.cursor = 'pointer';
            doneBtn.onclick = () => location.reload();
            sidebarheader.appendChild(doneBtn);

            sidebar.appendChild(sidebarheader);

            const list = document.createElement('ul');
            list.style.listStyle = 'none';
            list.style.padding = '0';

            savedLinks.forEach((link, index) => {
                const li = document.createElement('li');
                li.style.display = 'flex';
                li.style.alignItems = 'center';
                li.style.padding = '4px 0';
                li.dataset.index = index;

                // Drag handle (6 dots)
                const handle = document.createElement('span');
                handle.innerHTML = '&#8942;&#8942;';
                handle.style.cursor = 'grab';
                handle.style.marginRight = '8px';
                handle.style.userSelect = 'none';
                handle.setAttribute('draggable', 'true');
                li.appendChild(handle);

                // Link
                const linkEl = document.createElement('a');
                linkEl.href = link.url;
                linkEl.textContent = link.text;
                linkEl.style.flexGrow = '1';
                linkEl.style.textDecoration = 'none';
                linkEl.style.color = '#000';
                linkEl.style.whiteSpace = 'nowrap';
                linkEl.style.cursor = 'pointer';
                li.appendChild(linkEl);

                // Delete button
                const delBtn = document.createElement('button');
                delBtn.textContent = '✕';
                delBtn.style.marginLeft = '8px';
                delBtn.style.cursor = 'pointer';
                delBtn.style.border = 'none';
                delBtn.style.background = 'none';

                delBtn.onclick = (e) => {
                    e.stopPropagation(); // Prevent accidental drag
                    savedLinks.splice(index, 1);
                    localStorage.setItem('myQuickLinks', JSON.stringify(savedLinks));
                    editQuickLinks.onclick();
                };

                li.addEventListener('dragstart', (e) => {
                    e.dataTransfer.effectAllowed = 'move'; 
                    e.dataTransfer.dropEffect = 'move';
                    e.dataTransfer.setData('text/plain', li.dataset.index);
                });

                li.appendChild(delBtn);

                list.appendChild(li);
            });

            let draggedItem = null;

            list.addEventListener('dragstart', (e) => {
                const li = e.target.closest('li');
                if (!li) return;
                draggedItem = li;
                setTimeout(() => {
                    li.style.opacity = '0.5';
                });
            });

            list.addEventListener('dragend', (e) => {
                if (draggedItem) {
                    draggedItem.style.opacity = '1';
                    draggedItem = null;
                }
            });

            list.addEventListener('dragover', (e) => {
                e.preventDefault();
                const target = e.target.closest('li');
                if (!draggedItem || !target || draggedItem === target) return;

                const rect = target.getBoundingClientRect();
                const isBelow = (e.clientY - rect.top) > rect.height / 2;

                target.parentNode.insertBefore(draggedItem, isBelow ? target.nextSibling : target);
            });

            list.addEventListener('drop', () => {
                const newOrder = [];
                list.querySelectorAll('li').forEach(li => {
                    const idx = parseInt(li.dataset.index);
                    newOrder.push(savedLinks[idx]);
                });
                localStorage.setItem('myQuickLinks', JSON.stringify(newOrder));
            });

            sidebar.appendChild(list);     
        }

        // Append the h3 and button to the flex container
        sidebarheader.appendChild(title);
        sidebarheader.appendChild(editQuickLinks);
        
        // Append the flex container to the sidebar
        sidebar.appendChild(sidebarheader);
        
        const savedLinks = JSON.parse(localStorage.getItem('myQuickLinks') || '[]');

        // Add each custom link to the sidebar
        savedLinks.forEach(linkData => {
            const link = document.createElement('a');
            link.href = linkData.url;
            link.textContent = linkData.text;
            link.style.display = 'block';
            link.style.marginBottom = '10px';
            link.style.fontWeight = 'normal';
            sidebar.appendChild(link);
        });

        // Make pageBodyDiv a flex container and add children
        pageBodyDiv.style.display = 'flex';
        pageBodyDiv.appendChild(mainContent);
        pageBodyDiv.appendChild(sidebar);
    }
}


// Login page

if ((window.location.href.includes("WWWLogin")) && (site === "horizon.mcgill.ca")) {

    const login_image = chrome.runtime.getURL("images/mcgill_login_image.jpg");
    const body = document.querySelector("div.pagebodydiv");

    const newBody = document.createElement("div");
    newBody.innerHTML = `
        <div style="display: flex; flex-wrap: nowrap; width: 100%; max-width: 1200px; margin: 40px auto; gap: 40px; box-sizing: border-box; align-items: stretch;">
        
            <!-- Left Column -->
            <div style="flex: 1; padding: 24px; box-sizing: border-box;">
                <h2 style="margin-bottom: 8px; padding-left: 0 !important;">Log into Minerva</h2>
                <div style="margin-bottom: 24px; color: #555;">McGill's central information system</div>

                <!-- SSO Login -->
                <div class="login_div" style="margin-bottom: 40px;">
                    <strong>Students, Alumni, Instructors, and Staff</strong>
                    <a href="https://horizon.mcgill.ca/ssomanager/saml/login?relayState=/c/auth/SSB">
                        <button type="button"
                            style="width: 100%; margin: 16px 0; padding: 12px; background-color: #ED1B2F; color: white; border: none; border-radius: 4px; font-weight: bold; cursor:pointer;">
                            Login
                        </button>
                    </a>
                    <div style="font-size: 0.85em; color: #444;">When finished using Minerva, please click EXIT and close your browser to protect your privacy.</div>
                </div>

                <!-- Guest Login -->
                <div class="login_div">
                    <form action="/pban1/twbkwbis.P_ValLogin" method="post" name="loginform" autocomplete="off">
                        <div style="margin-bottom: 16px; font-weight: bold;">Applicants and Guests</div>

                        <label for="sid" style="display: block; margin-bottom: 6px;">McGill ID</label>
                        <input type="text" name="sid" id="sid" required
                            style="width: 100%; padding: 10px; margin-bottom: 16px; border: 1px solid #ccc; border-radius: 4px;" />

                        <label for="PIN" style="display: block; margin-bottom: 6px;">PIN</label>
                        <input type="password" name="PIN" id="PIN" required
                            style="width: 100%; padding: 10px; margin-bottom: 16px; border: 1px solid #ccc; border-radius: 4px;" />

                        <button type="submit" value="Login" id="mcg_id_submit"
                            style="width: 100%; padding: 12px; background-color: #ED1B2F; color: white; border: none; border-radius: 4px; font-weight: bold; cursor:pointer;">
                            Login
                        </button>
                        <div style="margin-top: 16px; text-align: center; font-size: 0.9em;">

                            <span class="fglink_container" style="margin-right: 12px;">
                                <a href="bzgkemlv.p_forgot_id" id="fgidlink" style="color: #0066cc;">Forgot ID?</a>
                                <div class="fglink_help" style="position: absolute; background: #f0f0f0; padding: 8px; border: 1px solid #ccc; width: 280px; margin-top: 4px;">
                                    <p>Your McGill ID is the <strong>9-digit number</strong> shown on your McGill ID card.</p>
                                    <p>If you don't remember your McGill ID, click <strong>Forgot ID?</strong></p>
                                    <p><strong>Applicants</strong>: Your McGill ID number was sent to you in the email acknowledgement of your application.</p>
                                    <p><strong>New Staff</strong>: Your McGill ID number was sent to the email address you provided when you applied.</p>
                                    <p><strong>Alumni</strong>: If your McGill ID was a 7-digit number when you last studied at McGill, you may be able to access Minerva by adding <strong>11</strong> at the start (e.g. <strong>11</strong>xxxxxxx).</p>
                                </div>
                            </span>

                            <span class="fglink_container">
                                <a href="bzgkemlv.p_forgot_pin" id="fgpinlink" class="flink" style="color: #0066cc;">Forgot PIN?</a>
                                <div class="fglink_help" style="position: absolute; background: #f0f0f0; padding: 8px; border: 1px solid #ccc; width: 280px; margin-top: 4px;">
                                    <p>If you don't remember your Minerva PIN, enter your McGill ID and click <strong>Forgot PIN?</strong></p>
                                    <p><strong>Applicants and guests</strong>: For first-time login, your PIN is your <strong>date of birth</strong> in the format <strong>yymmdd</strong>, (year, month, day) e.g. 850624.</p>
                                    <p><strong>New Staff</strong>: You will receive your initial PIN by email.</p>
                                    <p><strong><font color="#dd000">Note</font></strong>: If your PIN has been reset for you, it will revert to your <b>date of birth</b> in the format <b>yymmdd</b> (year, month, day) e.g. 850624.</p>
                                </div>
                            </span>

                        </div>


                    </form>
                </div>
            </div>

            <!-- Right Column -->
            <div style="flex: 1; padding: 24px; background-color: #f7f7f7; box-sizing: border-box; display: flex; flex-direction: column; justify-content: flex-start; height: 100%; border-radius: 5px;">
                <img src="${login_image}" alt="McGill campus building with flag"
                    style="width: 100%; max-width: 100%; height: 500px; border-radius: 8px; object-fit: cover; object-position: top;" />
                <p style="font-size: 0.8em; margin-top: 12px; text-align: center; color: #666;">
                    Photo by <a href="https://unsplash.com/@benjaminrb" target="_blank">Benjamin Riot</a> on
                    <a href="https://unsplash.com/photos/a-flag-on-top-of-a-building-QzYECgX1eLc" target="_blank">Unsplash</a>
                </p>
            </div>

        </div>
    `;

    Add_Custom_Style(`
        .fglink_container {
            position: relative;
            display: inline-block;
        }

        .fglink_container .fglink_help {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            background: #f0f0f0;
            border: 1px solid #ccc;
            padding: 8px;
            width: 280px;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease;
            z-index: 9999;
            pointer-events: none; /* Prevent tooltip from blocking mouse events */
        }

        .fglink_container:hover .fglink_help {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            display: block;
        }
    
        
    `);

    const scripts = document.querySelectorAll("div.pagebodydiv script");
        body.innerHTML = '';
        body.appendChild(newBody);
        scripts.forEach(script => {
        body.appendChild(script);
        });

    const pagetitle = document.querySelector('div.pagetitlediv');
    pagetitle.remove();
    
}

})