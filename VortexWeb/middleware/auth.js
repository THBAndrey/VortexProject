export default function ({ app, store, redirect, error }) {
    if (!store.state.user.currentUser) {
        return redirect(app.localePath('login'))
    }
}  