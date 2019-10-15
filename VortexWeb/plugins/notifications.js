export default async context => {
    // Retrieve Firebase Messaging object.
    const messaging = context.app.$fireMess

    // Add the public key generated from the console here.
    messaging.usePublicVapidKey("BG190EHb5jJ5GnQC9hiidoUlWKgl-OcBlwrIqdb9l9TNKR4bybXsiFmjf7CNNUJUYUntVyTdjkRkGrvXce6Hl5I")

    //Request permission to receive notifications
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.')
            // TODO(developer): Retrieve an Instance ID token for use with FCM.
            // ...


            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.info(currentToken);
                    context.store.dispatch('notifications/changeToken', currentToken)
                    // sendTokenToServer(currentToken)
                    // updateUIForPushEnabled(currentToken)
                } else {
                    // Show permission request.
                    console.log('No Instance ID token available. Request permission to generate one.')
                    // Show permission UI.
                    updateUIForPushPermissionRequired()
                    setTokenSentToServer(false)
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err)
                showToken('Error retrieving Instance ID token. ', err)
                setTokenSentToServer(false)
            })

            messaging.onTokenRefresh(() => {
                messaging.getToken().then((refreshedToken) => {
                    console.log('Token refreshed.')
                    context.store.dispatch('notifications/changeToken', refreshedToken)
                    // Indicate that the new Instance ID token has not yet been sent to the
                    // app server.
                    // setTokenSentToServer(false)
                    // Send Instance ID token to app server.
                    // sendTokenToServer(refreshedToken)
                    // ...
                }).catch((err) => {
                    console.log('Unable to retrieve refreshed token ', err)
                    showToken('Unable to retrieve refreshed token ', err)
                })
            })

            messaging.onMessage((payload) => {
                console.info('Payload', payload)
                context.store.dispatch('notifications/showToast', {
                    title: payload.data.title,
                    message: payload.data.message
                })
            });


        } else {
            console.log('Unable to get permission to notify.')
        }
    })
}