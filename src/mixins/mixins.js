export const translit = (str, isUrl = false) => {
  let path = '';
  let ending = '';
  if (isUrl) {
    path  = '/player/';
    ending = '/';
  }

  const ru = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
    'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i',
    'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
    'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh',
    'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya'
  }, n_str = [];

  str = str.replace(/[ъь]+/g, '').replace(/й/g, 'i');
  str = str.replace(' ', '_').replace(/й/g, 'i');

  for (let i = 0; i < str.length; ++i) {
    n_str.push(
      ru[str[i]]
      || ru[str[i].toLowerCase()] == undefined && str[i]
      || ru[str[i].toLowerCase()].replace(/^(.)/, function (match) {
        return match
      })
    );
  }
  return path + n_str.join('') + ending;
};