# inexor-rgf-flow-editor

This repo is experimental.

## Idea

1. Use tauri to provide a full application which is able to combine frontend and backend
2. Integrate the Inexor RGF runtime via the tauri backend
3. Integrate VSCode Web
4. Implement the flow editor as set of extensions for VSCode web

## Build

* Important: Use Node >= 16.17, <= 17

## Roadmap

### Milestone 1: Make it work

- [x] Make frontend build with a working vscode-web
- [x] Tauri delivers a simple, but working VS Code in a tauri window

### Milestone 2: POC: Make it extensible, Try to integrate

- [ ] Implement a simple, but working extension which is included in the frontend
- [ ] Test different types of extensions like commands, notifications, editors, ...

### Milestone 3: Virtual File System

- [ ] Runtimes
  - [ ] Types
    - [ ] Components
      - [ ] Component
    - [ ] Entity Types
      - [ ] Entity Type
    - [ ] Relation Types
      - [ ] Relation Type
    - [ ] Flow Types
      - [ ] Flow Type
  - [ ] System
    - [ ] Plugins
      - [ ] Plugin
    - [ ] Remotes
      - [ ] Remote

### Milestone 4: Integrate with inexor-rgf-runtime

- [ ] Backend: Prepare a directory layout for running one or multiple local runtimes
- [ ] Backend: Prepare a config file with a list of local and remote runtimes
- [ ] Backend: RuntimeManager: list, create, read, update, delete, start, stop, restart a runtime
- [ ] Backend: Provide RPC commands for the RuntimeManager 
- [ ] Frontend: RuntimeManager: list, create, read, update, delete, start, stop, restart a runtime
- [ ] VFS Runtimes

### Milestone 5: Plugins

### Milestone 6: Type System: Components

### Milestone 7: Type System: Entity Types

### Milestone 8: Type System: Relation Types

### Milestone 9: Type System: Flow Types
