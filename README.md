# SLONIT-COURSE

## GIT
### Базовые команды
- `git init` - *создает пустой git репозиторий*
- `git config user.name` - *указывает автора изменений*
- `git config user.email` - *указывает email*
- `git show` - *показывает информацию о коммите*
- `git show --pretty=fuller` - *показывает более подробную информацию о коммите*
- `git status` - *выводит информацию о директории со стороны git*

`git add 'path'` - *добавляет файл в index*
- `git add .` - *добавляет все изменения из каталога в index*
- `git add -f 'path'` - *добавляет файл в index игнорируя .gitignore*
- `git add -p 'path'` - *позволяет пройтись по каждому измененному фрагменту в файле*


`git commit` - *добавляет файлы из index в Repository*
- `git commit -m 'message'` - *позволяет указать комментарий без вызова редактора*
- `git commit -author=''` - *указывает автора коммита*
- `git commit -a` - *добавляет файлы в index и Repository если они уже были добавлены в index*

#### Удаление и переименование файлов
`git rm 'path'` - *удаляет файл из Work Directory и добавляет в index*
- `git rm -r 'path'` - *удаляет дирректорию и добавляет изменения в index*
- `git rm -r --cached 'path'` - *удаляет не добавляя в index*
- `git rm -f'` - *игнорирует предупреждения*

`git mv 'old' 'new'` - *переименовывает файл и добавляет его в индекс*