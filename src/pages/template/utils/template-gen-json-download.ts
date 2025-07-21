export const templateGenDownloadBase64Txt = (json: object, fileName: string) => {
  const jsonString = JSON.stringify(json);
  const base64String = btoa(unescape(encodeURIComponent(jsonString)));

  const blob = new Blob([base64String], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = fileName.endsWith('.txt') ? fileName : `${fileName}.txt`;
  link.click();

  URL.revokeObjectURL(url);
};
