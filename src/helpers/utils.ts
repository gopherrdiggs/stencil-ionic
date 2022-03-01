export function encodeUriPlusSpecials(uri: string) {

  let otherSpecialsToEncode = [ 
    { character: "#", replacement: '%23' },
    { character: "'", replacement: '%27%27' },
    { character: "+", replacement: '%2B' },
    { character: "/", replacement: '%2F' },
    { character: ":", replacement: '%3A' },
    { character: "–", replacement: '%96' },
    { character: "—", replacement: '%97' }
  ];

  let encodedUri = encodeURIComponent(uri);

  for (let special of otherSpecialsToEncode) {
    while (encodedUri.includes(special.character)) {
      encodedUri = encodedUri.replace(special.character, special.replacement);
    }
  }

  return encodedUri;
}

export function exportCsvFile(fileName: string, csvData: any) {
  
  let downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute('href', URL.createObjectURL(new Blob([csvData], { type: 'text/csv;charset=utf-8' })));
  downloadAnchorNode.setAttribute('download', fileName);
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

export function exportJsonFile(fileName: string, jsonData: any) {

  let downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute('href', `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(jsonData))}`);
  downloadAnchorNode.setAttribute('download', fileName);
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

export function formatDateTime(utc: number) {

  let d = new Date(utc);

  return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
}

export function generateUUID() {
  let
    d = new Date().getTime(),
    d2 = (performance && performance.now && (performance.now() * 1000)) || 0;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
  });
}

export function getWindowLocationDomain() {

  let indexOfDoubleForwardSlash = window.location.href.indexOf("//") + 2;
  let indexOfNextForwardSlash = window.location.href.indexOf("/", indexOfDoubleForwardSlash);

  return window.location.href.substring(0, indexOfNextForwardSlash);
}

export function setDarkTheme(enabled: boolean) {
  document.body.classList.toggle("dark", enabled);
}

export function sleep(ms: number) {
  
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function styleContentScrollbar(contentParentElement: HTMLElement) {

  const contentElement = contentParentElement.querySelector('ion-content');
  const styles = document.createElement('style');

  styles.textContent = `
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: var(--scrollbar-background);
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: var(--scrollbar-thumb);
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--scrollbar-thumb); 
      border-radius: 5px;
    }
    ::-webkit-scrollbar-corner {
      background: var(--scrollbar-background); 
    }
  `;

  contentElement.shadowRoot.appendChild(styles);
}