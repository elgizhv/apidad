const list = (list: any[]) => {
  return list.reduce(
    (result: any, item: any) => ({ ...result, [item.lang]: item.value }),
    {}
  );
};
const translate = (list: any, context: any) => {
  if (!context) return;

  if (!Array.isArray(list)) list = [list];
  for (let item of list) {
    item.setLanguage?.(context.lang);
  }
};

export default {
  list,
  translate,
};
