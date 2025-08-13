import { ReactComponent as BitcoinIcon } from '../../assets/smallbitcoin.svg';
import { ReactComponent as EthereumIcon } from '../../assets/smallEthereum.svg';
import { ReactComponent as XRPIcon } from '../../assets/smallXrp.svg';
import { ReactComponent as SolanaIcon } from '../../assets/smallSolana.svg';
import { ReactComponent as BNBIcon } from '../../assets/smallBnb.svg';

export const MY_PORTFOLIO = [
    {
        id: 1,
        title: "Bitcoin",
        symbol: "BTC",
        value: 45000,
        change: '+5.2',
        icon: BitcoinIcon,
        balance: 12000.46
    },
    {
        id: 2,
        title: "Ethereum",
        symbol: "ETH",
        value: 3000,
        change: '+3.8',
        icon: EthereumIcon,
        balance: 8000.23
    },
    {
        id: 3,
        title: "XRP",
        symbol: "XRP",
        value: 129,
        change: '-4.5',
        icon: XRPIcon,
        balance: 5000.00
    },
    {
        id: 4,
        title: "Solana",
        symbol: "SOL",
        value: 15067,
        change: '+2.1',
        icon: SolanaIcon,
        balance: 3000.75
    },
    {
        id: 5,
        title: "Cardano",
        symbol: "BNB",
        value: 4565,
        change: '-6.0',
        icon: BNBIcon,
        balance: 2000.50
    }
]