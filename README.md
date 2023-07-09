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

- [x] Milestone 1: Make VS Code run in tauri ✓
- [x] Milestone 2: Simple extension, experiment with the possibilities of VS Code extensions
- [ ] Milestone 3: Virtual File System: Experiment if it is possible to represent the type system (and instance system)
      as virtual file system
- [ ] Milestone 4: Manage Plugins
- [ ] Milestone 5: Manage Remotes
- [ ] Milestone 6: Type System: Components (CRUD)
- [ ] Milestone 7: Type System: Entity Types (CRUD)
- [ ] Milestone 8: Type System: Relation Types (CRUD)
- [ ] Milestone 9: Type System: Flow Types (CRUD)
- [ ] Milestone 7: Instance System: Entity Instances (CRUD)
- [ ] Milestone 8: Instance System: Relation Instances (CRUD)
- [ ] Milestone 9: Instance System: Flow Instances (CRUD)
- [ ] Milestone 10: Implement an editor for Flow Types using https://reactflow.dev/
- [ ] Milestone 11: Implement an editor and debugger for Flow Instances using https://reactflow.dev/
