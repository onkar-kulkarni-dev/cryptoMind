import {ReactComponent as BitcoinIcon} from '../../assets/bitcoin.svg';
import {ReactComponent as EthereumIcon} from '../../assets/ethereum.svg';
import {ReactComponent as XRPIcon} from '../../assets/xrp.svg';
import {ReactComponent as SolanaIcon} from '../../assets/solana.svg';
import {ReactComponent as CardanoIcon} from '../../assets/cardano.svg';

export const TOP_MOVERS = [
    {
        id: 1,
        title: "Bitcoin",
        symbol: "BTC",
        price: 45000,
        change: 5.2,
        icon: BitcoinIcon
    },
    {
        id: 2,
        title: "Ethereum",
        symbol: "ETH",
        price: 3000,
        change: 3.8,
        icon: EthereumIcon
    },
    {
        id: 3,
        title: "XRP",
        symbol: "XRP",
        price: 1.2,
        change: 4.5,
        icon: XRPIcon
    },
    {
        id: 4,
        title: "Solana",
        symbol: "SOL",
        price: 150,
        change: 2.1,
        icon: SolanaIcon
    },
    {
        id: 5,
        title: "Cardano",
        symbol: "ADA",
        price: 0.5,
        change: 6.0,
        icon: CardanoIcon
    }
]