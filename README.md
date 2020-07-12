# Ngrx Quickstart

## Steps to add a new state element
1. Add the element's name to `AppState` interface in `./src/app/store/app.state.ts`.
2. Create a new actions file name `<element_name>.actions.ts` in `./src/app/store/actions/`. 
3. Create a new reducer file named `<element_name>.reducer.ts` in `./src/app/store/reducers/`.
4. Add the reducer to `reducers` object in `./src/app/store/reducers/index.ts`.