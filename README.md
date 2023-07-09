# inexor-rgf-flow-editor

This repo is experimental.

## Idea

In order to progress faster and to avoid work which has already been done elsewhere, it would be great to build on a
framework. So we decided to try to build on top of an IDE which is web-based and can be integrated in tauri to build
a full-stack application.

1. Use tauri to provide a full application which is able to combine frontend and backend
2. Integrate the Inexor RGF runtime via the tauri backend
3. Integrate VS Code Web as an IDE framework to build on top
4. Implement the flow editor as set of extensions for VS Code web

## Roadmap

- [x] Milestone 1: Make VS Code run in tauri ✓
- [x] Milestone 2: Simple extension, experiment with the possibilities of VS Code extensions
- [ ] Milestone 3: Virtual File System: Experiment if it is possible to represent the type system (and instance system)
      as virtual file system
- [ ] Milestone 4: Runtime Manager: Manage multiple runtimes (both local / temporary and remote)
- [ ] Milestone 5: Manage Plugins of a Runtime
- [ ] Milestone 6: Manage Remotes of a Runtime
- [ ] Milestone 7: Type System: Components (CRUD)
- [ ] Milestone 8: Type System: Entity Types (CRUD)
- [ ] Milestone 9: Type System: Relation Types (CRUD)
- [ ] Milestone 10: Type System: Flow Types (CRUD)
- [ ] Milestone 11: Instance System: Entity Instances (CRUD)
- [ ] Milestone 12: Instance System: Relation Instances (CRUD)
- [ ] Milestone 13: Instance System: Flow Instances (CRUD)
- [ ] Milestone 14: Implement an editor for Flow Types using https://reactflow.dev/
- [ ] Milestone 15: Implement an editor and debugger for Flow Instances using reactflow

## Experiments

- [ ] Virtual File System
- [ ] Connect vscode notifications with tauri system notifications

## Build Instructions

* Important: Use Node >= 16.17, <= 17
