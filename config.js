module.exports = {
  brew: [
    'ack', // http://conqueringthecommandline.com/book/ack_ag
    'ag',
    'autojump', // https://github.com/wting/autojump
    'bat', // alternative to `cat`: https://github.com/sharkdp/bat
    'coreutils', // Install GNU core utilities (those that come with macOS are outdated) Don’t forget to add `$(brew --prefix coreutils)/libexec/gnubin` to `$PATH`.
    'dos2unix',
    'findutils', // Install GNU `find`, `locate`, `updatedb`, and `xargs`, `g`-prefixed
    'fzf',
    'readline', // ensure gawk gets good readline
    'gawk',
    'gnupg',
    // Install GNU `sed`, overwriting the built-in `sed`
    // so we can do "sed -i 's/foo/bar/' file" instead of "sed -i '' 's/foo/bar/' file"
    'gnu-sed --with-default-names',
    'grep --with-default-names', // upgrade grep so we can get things like inverted match (-v)
    'homebrew/dupes/grep', // better, more recent grep
    'httpie', // https://github.com/jkbrzt/httpie
    'jq', // jq is a sort of JSON grep
    'mas', // Mac App Store CLI: https://github.com/mas-cli/mas
    'moreutils', // Install some other useful utilities like `sponge`
    'nmap',
    'openconnect',
    'reattach-to-user-namespace',
    'homebrew/dupes/screen', // better/more recent version of screen
    'tmux',
    'todo-txt',
    'tree',
    'ttyrec',
    'vim --with-client-server --with-override-system-vi', // better, more recent vim
    'watch',
    'wget --enable-iri', // Install wget with IRI support
    'redis',
    'postgresql@9.6',
    'sourcetree',
    'elixir',
    'rbenv',
    'nvm',

  ],
  cask: [
    'google-chrome',
    'notion',
    'slack',
    'sublime-text',
    'encryptme',
    'brave',
    'visual-studio-code',
    'alfred',
    'flux',
    'polymail',
    'postgres',
    'postman',
    'spotify',
    '1password',
    'helium',
    'cheatsheet',
    'docker', // docker for mac
    'flux',
    'gpg-suite',
    'iterm2',
    'little-snitch',
    'micro-snitch',
    'signal',
    'sizeup',
    'sketch',
    'slack',
    'the-unarchiver',
    'visual-studio-code',
    'xquartz',
    'spectacle'
  ],
  gem: [
    'bundler',
    'rspec'
  ],
  npm: [
    'antic',
    'buzzphrase',
    'eslint',
    'tslint',
    'instant-markdown-d',
    'npm-check-updates',
    'prettyjson',
    'trash',
    'vtop'
  ]
};
