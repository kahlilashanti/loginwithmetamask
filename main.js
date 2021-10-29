
window.userWalletAddress = null

const loginButton = document.getElementById('loginButton')

const userWallet = document.getElementById('userWallet')

function toggleButton() {
    //check is metamask installed in the current browser?
    if (!window.ethereum) {
        loginButton.innerHTML = 'Metamask is not installed'
        loginButton.classList.remove('bg-purple-500', 'text-white')
        loginButton.classList.add('bg-gray-500', 'text-gray-300', 'cursor-not-allowed')
        return false
    }
    loginButton.addEventListener('click', () => { loginWithMetaMask() })
}

async function loginWithMetaMask() {
    //from metamask docs
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        .catch((e) => {
            console.error(e.message)
            return
        })
    if (!accounts) { return }
    window.userWalletAddress = accounts[0]
    userWallet.innerText = window.userWalletAddress


}



window.addEventListener('DOMContentLoaded', () => {
    toggleButton()
});


