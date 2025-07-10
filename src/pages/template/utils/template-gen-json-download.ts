export const templateGenDownloadJson = (json: object, fileName: string) => {
  const jsonString = JSON.stringify(json);

  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = fileName.endsWith('.json') ? fileName : `${fileName}.json`;
  link.click();

  URL.revokeObjectURL(url);
};
