# Bash

## What is bash?

It's a shell program - an executable binary that takes commands as input and calls the Operating System API

It's purpose is to glue together other programs

Other shells - sh, ash, dash, ksh, csh, tcsh, or tclsh

Bash -> 'Bourne Again SHell'
zsh is a cousin of Bash developed latter

## Globbing and Quoting

The shell takes the `*` and converts it to match all patterns found.

### Quoting
quoting globs (using "" or '') removes their effect.

### Other Glob Characters
* matches all the things
? matches a single char
[abd] matches chars specified (a, b, or d)
[a-d] matches all chars in the range (a, b, c, or d)

### Dotfiles

These are files that are generally ignored by globbing patterns

you have to specify `.` at the start of the glob to match a dot file so:

```bash
ls .*
echo .*
```

### Differences to RegeX

```bash
rename -n 's/(.*)/new$1/' *
```

the first `*` is treated as a regular expression because it is being interpreted by `rename`. It's not interpreted by the shell as it's quoted in ''. The second `*` is treated as a glob and applied to all files.

```bash
$ ls 0?*
01-filename 02-filename 03-whatup
$ ls [0-9]*
01-filename 02-filename 03-whatup
$ ls [0-9][23]*
02-filename 03-whatup
```

```bash
# /Users/zacjones/Desktop/source/egghead-repos/sql-fundamentals
$ ls -d [01][06-9]*
00-setup-and-introduction-to-sql-fundamentals
06-keep-data-integrity-with-constraints
07-organize-table-data-with-indexes
08-select-grouped-and-aggregated-data-with-sql
09-conditionally-select-out-filtered-data-with-sql-where
10-combining-tables-together-with-sql-join-statements
```
## Variables in Bash

There are serveral variable types in bash

Basic Variables, Quoting vars, quoting and globs, `env` and `export` commands, simple and associative arrays

you have to use the `$` to get the value of a variable, thus dereferencing it

### Variables and Quoting
MySENTENCE=A sentence
```bash
MYGLOB=*
echo $MYGLOB
MYGLOB="*"
echo "$MYGLOB"
MYGLOB='*'
echo "$MYGLOB"
echo '$MYGLOB'
echo $MYGLOB
```

### Shell variables
```bash
$ MYSTRING=astring
$ bash
$ echo $MYSTRING
$ exit
$ echo $MYSTRING
$ unset MYSTRING
$ echo $MYSTRING
$ export MYSTRING=anotherstring
$ bash
$ echo $MYSTRING
$ exit
```
exporting a variable will make that variable available to any bash shell process started from the current process

All processes have environment variables

use `env` to see all exported variables in the process that you're in

`compgen -v` generates a list of possible 'word completions.' the `-v` shows all the variables that could be completed in the context

## Arrays

```
 $ bash--version
 $ echo$BASH_VERSINFO
 $ echo$BASH_VERSINFO[0]
 $ echo${BASH_VERSINFO[0]}
 $ echo${BASH_VERSINFO}
```

If no index is given to an array, bash will output what is in the first element of the array.

To use `[]` syntax, you need to tell bash to interpolate an array instead of viewing it as a string with `{}`.

"simple variables" can be treated as an array with one element.

### Associative Arrays

```bash
$ declare-AMYAA=([one]=1[two]=2[three]=3)
$ MYAA[one]="1"
$ MYAA[two]="2"
$ echo$MYAA
$ echo${MYAA[one]}
$ MYAA[one]="1"
$ WANT=two
$ echo${MYAA[$WANT]}
```

## Functions

a 'command' in bash is:
 - a function
 - an alias
 - a program
 - a builtin

### Arguments

There are no checking of function arguments
```bash
$ function myfunc {
echo Hello World
}
```

the function won't error out if it doesn't have an argument - you have to manage the args yourself

### Variable Scope

variables can have scope - they can be accessed from outside a function if you do not set `local` on a variable, it can be set outside the function

### Functions, Builtins, Aliases, and Programs

- Functions
- Builtins
- Aliases
- Programs

