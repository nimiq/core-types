declare namespace Nimiq {
    class Class {
        public static scope: any;
        public static register(cls: any): void;
    }

    class LogNative {
        constructor()
        public isLoggable(tag: string, level: number): boolean;
        public setLoggable(tag: string, level: number): void;
        public msg(level: number, tag: string|{name: string}, args: any[]): void;
    }

    class Log {
        public static instance: Log;
        constructor(native: LogNative);
        public setLoggable(tag: string, level: Log.Level): void;
        public level: Log.Level;
        public msg(level: Log.Level, tag: string|{name: string}, args: any[]): void;
        public d(tag: string|{name: string}, message: string|(() => string), args: any[]): void;
        public e(tag: string|{name: string}, message: string|(() => string), args: any[]): void;
        public i(tag: string|{name: string}, message: string|(() => string), args: any[]): void;
        public v(tag: string|{name: string}, message: string|(() => string), args: any[]): void;
        public w(tag: string|{name: string}, message: string|(() => string), args: any[]): void;
        public t(tag: string|{name: string}, message: string|(() => string), args: any[]): void;
        public static TRACE: Log.Level.TRACE;
        public static VERBOSE: Log.Level.VERBOSE;
        public static DEBUG: Log.Level.DEBUG;
        public static INFO: Log.Level.INFO;
        public static WARNING: Log.Level.WARNING;
        public static ERROR: Log.Level.ERROR;
        public static ASSERT: Log.Level.ASSERT;
    }

    namespace Log {
        type Level = Log.Level.TRACE|Log.Level.VERBOSE|Log.Level.DEBUG|Log.Level.INFO|Log.Level.WARNING|Log.Level.ERROR|Log.Level.ASSERT;
        namespace Level {
            type TRACE =  1;
            type VERBOSE = 2;
            type DEBUG = 3;
            type INFO = 4;
            type WARNING = 5;
            type ERROR = 6;
            type ASSERT = 7;
            function toStringTag(level: Log.Level): string;
            function toString(level: Log.Level): string;
            function get(v: string|number|Log.Level): Log.Level;
        }
    }

    class Observable {
        public on(type: string, callback: (...args: any[]) => any): number;
        public off(type: string, id: number): void;
        public fire(type: string, ...args: any[]): (Promise<any>|null);
    }

    abstract class DataChannel extends Observable {
        constructor();
        public isExpectingMessage(type: Message.Type): boolean;
        public confirmExpectedMessage(type: Message.Type, success: boolean): void;
        public expectMessage(types: Message.Type|Message.Type[], timeoutCallback: () => any, [msgTimeout]: number, [chunkTimeout]: number): void;
        public abstract close(): void;
        public send(msg: Uint8Array): void;
        public abstract sendChung(msg: Uint8Array): void;
        public abstract readyState: void;
        public lastMessageReceivedAt: number;
    }

    namespace DataChannel {
        type CHUNK_SIZE_MAX = 16384; // 16 kb
        type MESSAGE_SIZE_MAX = 10485760; // 10 mb
        type CHUNK_TIMEOUT = 5000; // 5 seconds
        type MESSAGE_TIMEOUT = 3200000;
        type ReadyState = {
            CONNECTING: 0;
            OPEN: 1;
            CLOSING: 2;
            CLOSED: 3;
            fromString(str: string): DataChannel.ReadyState;
        };
    }

    class ExpectedMessage {
        constructor(types: Message.Type[], timeoutCallback: () => any, msgTimeout: number, chunkTimeout: number);
    }

    class CryptoLib {
        public static instance: { getRandomValues(buf: Uint8Array): Uint8Array };
    }

    class WebRtcFactory {
        public static newPeerConnection(configuration?: RTCConfiguration): RTCPeerConnection;
        public static newSessionDescription(rtcSessionDescriptionInit: any): RTCSessionDescription;
        public static newIceCandidate(rtcIceCandidateInit: any): RTCIceCandidate;
    }

    class WebSocketFactory {
        public static newWebSocketServer(networkConfig: WsNetworkConfig|WssNetworkConfig): any;
        public static newWebSocket(url: string, [options]: any): WebSocket;
    }

    class DnsUtils {
        public static lookup(host: string): Promise<NetAddress>;
    }

    class ConstantHelper {
        constructor();
        public static instance: ConstantHelper;
        public isConstant(constant: string): boolean;
        public get(constant: string): number;
        public set(constant: string, value: number): void;
        public reset(constant: string): void;
    }

    class Services {
        constructor([provided]: number, [accepted]: number);
        public provided: number;
        public accepted: number;
        public static isFullNode(services: number): boolean;
        public static isLightNode(services: number): boolean;
        public static isNanoNode(services: number): boolean;
        public static NONE: 0;
        public static NANO: 1;
        public static LIGHT: 2;
        public static FULL: 4;
    }

    class Timers {
        constructor();
        public setTimeout(key: any, fn: () => any, waitTime: number): void;
        public clearTimeout(key: any): void;
        public resetTimout(key: any, fn: () => any, waitTime: number): void;
        public timeoutExists(key: any): boolean;
        public setInterval(key: any, fn: () => any, intervalTime: number): void;
        public clearInterval(key: any): void;
        public resetInterval(key: any, fn: () => any, intervalTime: number): void;
        public intervalExists(key: any): boolean;
        public clearAll(): void;
    }

    class Version {
        public static isCompatible(code: number): boolean;
        public static CODE: 1;
    }

    class Time {
        constructor([offset]: number);
        public offset: number;
        public now(): number;
    }

    class IteratorUtils {
        // @ts-ignore
        public static alternate(...iterators: Iterator[]): Iterable;
    }

    class ArrayUtils {
        public static randomElement(arr: any[]): any;
        public static subarray(uintarr: Uint8Array, begin: number, end: number): Uint8Array;
        public static k_combinations(list: any[], k: number): Generator;
    }

    class HashMap {
        constructor(fnHash?: (o: object) => string);
        public get(key: any): any;
        public put(key: any, value: any): void;
        public remove(key: any): void;
        public contains(key: any): boolean;
        public keys(): any[];
        public keyIterator(): Iterator<any>;
        public values(): any[];
        public valueIterator(): Iterator<any>;
        public length: number;
        public isEmpty(): boolean;
    }

    class HashSet {
        constructor(fnHash?: (o: object) => string);
        public add(value: any): void;
        public addAll(collection: Iterable<any>): void;
        public get(value: any): any;
        public remove(value: any): void;
        public removeAll(collection: any[]): void;
        public clear(): void;
        public contains(value: any): boolean;
        public values(): any[];
        public valueIterator(): Iterator<any>;
        public [Symbol.iterator]: Iterator<any>;
        public length: number;
        public isEmpty(): boolean;
    }

    class LimitHashSet {
        constructor(limit: number, fnHash?: (o: object) => string);
        public add(value: any): void;
        public addAll(collection: Iterable<any>): void;
        public get(value: any): any;
        public remove(value: any): void;
        public removeAll(collection: any[]): void;
        public clear(): void;
        public contains(value: any): boolean;
        public values(): any[];
        public valueIterator(): Iterator<any>;
        public [Symbol.iterator]: Iterator<any>;
        public length: number;
        public isEmpty(): boolean;
    }

    class InclusionHashSet {
        constructor(fnHash?: (o: object) => string);
        public add(value: any): void;
        public addAll(collection: Iterable<any>): void;
        public remove(value: any): void;
        public removeAll(collection: any[]): void;
        public clear(): void;
        public contains(value: any): boolean;
        public values(): any[];
        public valueIterator(): Iterator<any>;
        public [Symbol.iterator]: Iterator<any>;
        public length: number;
        public isEmpty(): boolean;
        public clone(): InclusionHashSet;
    }

    class LimitInclusionHashSet {
        constructor(limit: number, fnHash?: (o: object) => string);
        public add(value: any): void;
        public addAll(collection: Iterable<any>): void;
        public remove(value: any): void;
        public removeAll(collection: any[]): void;
        public clear(): void;
        public contains(value: any): boolean;
        public values(): any[];
        public valueIterator(): Iterator<any>;
        public [Symbol.iterator]: Iterator<any>;
        public length: number;
        public isEmpty(): boolean;
        public clone(): LimitInclusionHashSet;
    }

    class LimitIterable {
        // @ts-ignore
        constructor(it: Iterable|Iterator, limit: number);
        public [Symbol.iterator](): {next: () => object};
        // @ts-ignore
        public static iterator(iterator: Iterator, limit: number): {next: () => object};
    }

    class LinkedList {
        constructor(...args: any[]);
        public push(value: any): void;
        public unshift(value: any): void;
        public pop(): any;
        public shift(): any;
        public clear(): void;
        public [Symbol.iterator](): Iterator<any>;
        public iterator(): Iterator<any>;
        public isEmpty(): boolean;
        public first: any;
        public last: any;
        public length: number;
    }

    class UniqueLinkedList extends LinkedList {
        constructor(fnHash: (o: object) => string);
        public push(value: any, moveBack?: boolean): void;
        public unshift(value: any): void;
        public pop(): any;
        public shift(): any;
        public clear(): void;
        public get(value: any): any;
        public contains(value: any): boolean;
        public remove(value: any): void;
        public moveBack(value: any): void;
    }

    class Queue {
        constructor(...args: any[]);
        public enqueue(value: any): void;
        public enqueueAll(values: any[]): void;
        public dequeue(): any;
        public dequeueMulti(count: number): any[];
        public peek(): any;
        public clear(): void;
        public isEmpty(): boolean;
        public length: number;
    }

    class UniqueQueue extends Queue {
        constructor(fnHash: (o: object) => string);
        public contains(value: any): boolean;
        public remove(value: any): void;
        public requeue(value: any): void;
    }

    class ThrottledQueue extends UniqueQueue {
        constructor([maxAtOnce]: number, [allowanceNum]: number, [allowanceInterval]: number, [maxSize]: number, allowanceCallback?: () => any);
        public stop(): void;
        public enqueue(value: any): void;
        public dequeue(): any;
        public dequeueMulti(count: number): any[];
        public isAvailable(): boolean;
        public available: number;
    }

    class SortedList {
        constructor([sortedList]: any[], compare?: (a: any, b: any) => -1|0|1);
        public indexOf(o: any): number;
        public add(value: any): void;
        public shift(): any;
        public pop(): any;
        public peekFirst(): any;
        public peekLast(): any;
        public remove(value: any): void;
        public clear(): void;
        public values(): any[];
        public [Symbol.iterator](): Iterator<any>;
        public copy(): SortedList;
        public length: number;
    }

    class Assert {
        public static that(condition: boolean, [message]: string): void;
    }

    class CryptoUtils {
        public static computeHmacSha512(key: Uint8Array, data: Uint8Array): Uint8Array;
        public static computePBKDF2sha512(password: Uint8Array, salt: Uint8Array, iterations: number, derivedKeyLength: number): Uint8Array;
        public static otpKdf(message: Uint8Array, key: Uint8Array, salt: Uint8Array, iterations: number): Promise<Uint8Array>;
        public static encryptOtpKdf(data: Uint8Array, key: Uint8Array): Promise<Uint8Array>;
        public static decryptOtpKdf(data: SerialBuffer, key: Uint8Array): Promise<Uint8Array>;
        public static SHA512_BLOCK_SIZE: 128;
        public static ENCRYPTION_INPUT_SIZE: 32;
        public static ENCRYPTION_KDF_ROUNDS: 256;
        public static ENCRYPTION_CHECKSUM_LENGTH: 4;
        public static ENCRYPTION_SALT_LENGTH: 16;
        public static ENCRYPTION_SIZE: 54;
    }

    class BufferUtils {
        public static toAscii(buffer: Uint8Array): string
        public static fromAscii(string: string): SerialBuffer;
        public static toBase64(buffer: Uint8Array): string
        public static fromBase64(base64: string): SerialBuffer;
        public static toBase64Url(buffer: Uint8Array): string
        public static fromBase64Url(base64: string): SerialBuffer;
        public static toBase32(buf: Uint8Array, [alphabet]: string): string;
        public static fromBase32(base32: string, [alphabet]: string): Uint8Array;
        public static toHex(buffer: Uint8Array): string;
        public static fromHex(hex: string): SerialBuffer;
        public static toBinary(buffer: Uint8Array): string;
        public static concatTypedArrays(a: Uint8Array|Uint16Array|Uint32Array, b: Uint8Array|Uint16Array|Uint32Array): Uint8Array|Uint16Array|Uint32Array;
        public static equals(a: Uint8Array|Uint16Array|Uint32Array, b: Uint8Array|Uint16Array|Uint32Array): boolean;
        public static compare(a: Uint8Array|Uint16Array|Uint32Array, b: Uint8Array|Uint16Array|Uint32Array): -1|0|1;
        public static xor(a: Uint8Array, b: Uint8Array): Uint8Array;
        public static BASE64_ALPHABET: string;
        public static BASE32_ALPHABET: {
            RFC4648: string;
            RFC4648_HEX: string;
            NIMIQ: string;
        };
        public static HEX_ALPHABET: string;
    }

    class SerialBuffer extends Uint8Array {
        constructor(bufferOrArrayOrLength: any)
        public subarray(start: number, end: number): Uint8Array;
        public readPos: number;
        public writePos: number;
        public reset(): void;
        public read(length: number): Uint8Array;
        public write(array: any): void;
        public readUint8(): number;
        public writeUint8(value: number): void;
        public readUint16(): number;
        public writeUint16(value: number): void;
        public readUint32(): number;
        public writeUint32(value: number): void;
        public readUint64(): number;
        public writeUint64(value: number): void;
        public readVarInt(): number;
        public writeVarInt(value: number): void;
        public static varUintSize(value: number): number;
        public readFloat64(): number;
        public writeFloat64(value: number): void;
        public readString(length: number): string;
        public writeString(value: string, length: number): void;
        public readPaddedString(length: number): string;
        public writePaddedString(value: string, length: number): void;
        public readVarLengthString(): string;
        public writeVarLengthString(value: string): void;
        public static varLengthStringSize(value: string): number;
    }

    class Synchronizer {}
    class MultiSynchronizer {}
    class PrioritySynchronizer {}
    class RateLimit {}
    class IWorker {}

    class WasmHelper {
        public static doImportBrowser: () => void;
    }

    class CryptoWorker {
        public static getInstanceAsync(): Promise<Worker>;
    }
    class CryptoWorkerImpl {}
    class CRC32 {}
    class BigNumber {}
    class NumberUtils {}
    class MerkleTree {}
    class MerklePath {}
    class MerkleProof {}
    class PlatformUtils {}
    class StringUtils {}

    class Policy {
        public static BLOCK_TIME: 60;
        public static BLOCK_SIZE_MAX: 1e5;
        public static BLOCK_TARGET_MAX: BigNumber;
        public static DIFFICULTY_BLOCK_WINDOW: 120;
        public static DIFFICULTY_MAX_ADJUSTMENT_FACTOR: 2;
        public static TRANSACTION_VALIDITY_WINDOW: 120;
        public static SATOSHIS_PER_COIN: 1e5;
        public static TOTAL_SUPPLY: 21e14;
        public static INITIAL_SUPPLY: 252000000000000;
        public static EMISSION_SPEED: number;
        public static EMISSION_TAIL_START: 48692960;
        public static EMISSION_TAIL_REWARD: 4000;
        public static NUM_BLOCKS_VERIFICATION: 250;
        public static coinsToSatoshis(coins: number): number;
        public static satoshisToCoins(satoshis: number): number;
        public static supplyAfter(blockHeight: number): number;
        public static blockRewardAt(blockHeight: number): number;
    }

    class Serializable {
        public equals(o: Serializable): boolean;
        public compare(o: Serializable): number;
        public hashCode(): string;
        public toString(): string;
        public toBase64(): string;
        public toHex(): string;
    }

    class Hash extends Serializable {
        public static blake2b(arr: Uint8Array): Hash;
        public static argon2d(arr: Uint8Array): Promise<Hash>;
        public static sha256(arr: Uint8Array): Hash;
        public static fromBase64(base64: string): Hash;
        public static fromHex(hex: string): Hash;
        public static isHash(o: any): boolean;
        public subarray(begin: number, end: number): Uint8Array
    }

    class Entropy extends Serializable {
        public static SIZE: 32;
        public static generate(): Entropy;
        public static unserialize(buf: SerialBuffer): Entropy;
        constructor(arg: Uint8Array);
        public toExtendedPrivateKey(password?: string, wordlist?: string[]): ExtendedPrivateKey;
        public toMnemonic(wordlist?: string[]): string[];
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public overwrite(entropy: Entropy): void;
    }

    class ExtendedPrivateKey extends Serializable {
        public static CHAIN_CODE_SIZE: 32;
        public static generateMasterKey(seed: Uint8Array): ExtendedPrivateKey;
        public static isValidPath(path: string): boolean;
        public static derivePathFromSeed(path: string, seed: Uint8Array): ExtendedPrivateKey;
        public static unserialize(buf: SerialBuffer): ExtendedPrivateKey;
        public privateKey: PrivateKey;
        public derivePath(path: string): ExtendedPrivateKey;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public derive(index: number): ExtendedPrivateKey;
        public toAddress(): Address;
    }

    class PrivateKey extends Serializable {
        public static SIZE: 32;
        public static generate(): PrivateKey;
        public static unserialize(buf: SerialBuffer): PrivateKey;
        constructor(arg: Uint8Array);
        public serialize(buf?: SerialBuffer): SerialBuffer;
    }

    class PublicKey extends Serializable {
        public static derive(privateKey: PrivateKey): PublicKey;
        public serialize(): SerialBuffer;
        public toAddress(): Address;
    }

    class KeyPair extends Serializable {
        public static unserialize(buffer: SerialBuffer): KeyPair;
        public static fromEncrypted(buffer: SerialBuffer, passphraseOrPin: Uint8Array): Promise<KeyPair>;
        public static derive(key: PrivateKey): KeyPair;
        public static generate(): KeyPair;
        public publicKey: PublicKey;
        public privateKey: PrivateKey;
        public isLocked: boolean;
        public exportEncrypted(passphrase: string | Uint8Array, unlockKey?: Uint8Array): Promise<SerialBuffer>;
        public serialize(): SerialBuffer;
        public lock(key: string | Uint8Array): Promise<void>;
        public relock(): void;
        public unlock(key: string | Uint8Array): Promise<void>;
        public equals(o: any): boolean;
    }

    class RandomSecret {}

    class Signature extends Serializable {
        public static create(privateKey: PrivateKey, publicKey: PublicKey, data: Uint8Array): Signature;
        public static unserialize(buf: SerialBuffer): Signature;
        public serialize(): SerialBuffer;
        public verify(publicKey: PublicKey, data: Uint8Array): boolean;
    }

    class Commitment {}
    class CommitmentPair {}
    class PartialSignature {}

    class MnemonicUtils {
        public static entropyToMnemonic(entropy: string | ArrayBuffer | Uint8Array | Entropy, wordlist?: string[]): string[]
        public static entropyToLegacyMnemonic(entropy: string | ArrayBuffer | Uint8Array | Entropy, wordlist?: string[]): string[]
        public static mnemonicToEntropy(mnemonic: string | string[], wordlist?: string[]): Entropy
        public static legacyMnemonicToEntropy(mnemonic: string | string[], wordlist?: string[]): Entropy
        public static mnemonicToSeed(mnemonic: string | string[], password?: string): Uint8Array
        public static mnemonicToExtendedPrivateKey(mnemonic: string | string[], password?: string): ExtendedPrivateKey
        public static isCollidingChecksum(entropy: Entropy): boolean
        public static getMnemonicType(mnemonic: string | string[], wordlist?: string[]): number

        public static DEFAULT_WORDLIST: string[];
        public static ENGLISH_WORDLIST: string[];

        public static MnemonicType: {
            LEGACY: 0,
            BIP39: 1,
            UNKNOWN: 2
        };
    }

    class Address extends Serializable {
        constructor(arg: Uint8Array);
        public static fromString(str: string): Address;
        public static fromBase64(base64: string): Address;
        public static fromHex(hex: string): Address;
        public static fromUserFriendlyAddress(str: string): Address;
        public toUserFriendlyAddress(): string;
        public equals(o: Address): boolean;
        public serialize(): SerialBuffer;
        public static unserialize(buf: SerialBuffer): Address;
    }

    class Account {
        public static Type: {
            BASIC: 0,
            VESTING: 1,
            HTLC: 2,
        };
        public balance: number;
        public type: number;
    }

    namespace Account {
        type Type = 0 | 1 | 2;
    }

    class PrunedAccount {}
    class BasicAccount extends Account {}
    class Contract extends Account {}
    class HashedTimeLockedContract extends Contract {}
    class VestingContract extends Contract {}
    class AccountsTreeNode {}
    class AccountsTreeStore {}
    class SynchronousAccountsTreeStore {}
    class AccountsProof {}
    class AccountsTreeChunk {}
    class AccountsTree {}
    class SynchronousAccountsTree {}
    class PartialAccountsTree {}
    class Accounts {}
    class BlockHeader {}
    class BlockInterlink {}
    class BlockBody {}
    class BlockUtils {}
    class Subscription {}

    abstract class Transaction {
        public static Format: {
            BASIC: 0,
            EXTENDED: 1,
        };
        public static Flag: {
            NONE: 1,
            CONTRACT_CREATION: 0b1,
        };
        public static unserialize(buf: SerialBuffer): Transaction;
        public sender: Address;
        public senderType: Account.Type;
        public recipient: Address;
        public recipientType: Account.Type;
        public value: number;
        public fee: number;
        public feePerByte: number;
        public networkId: number;
        public validityStartHeight: number;
        public flags: Transaction.Flag;
        public data: Uint8Array;
        public proof: Uint8Array;
        public hasFlag(flag: number): boolean;
        public serializeContent(): SerialBuffer;
        public verify(): boolean;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public hash(): Hash;
        public getContractCreationAddress(): Address;
    }

    namespace Transaction {
        type Format = 0 | 1;
        type Flag = 0 | 0b1;
    }

    class SignatureProof {
        public static verifyTransaction(transaction: Transaction): boolean;
        public static singleSig(publicKey: PublicKey, signature: Signature): SignatureProof;
        public static multiSig(signerKey: PublicKey, publicKeys: PublicKey[], signature: Signature): SignatureProof;
        public static unserialize(buf: Uint8Array): SignatureProof;
        public publicKey: PublicKey;
        public signature: Signature;
        public serialize(): SerialBuffer;
        public verify(address: Address | null, data: Uint8Array): boolean;
    }

    class BasicTransaction extends Transaction {
        constructor(
            publicKey: PublicKey,
            recipient: Address,
            value: number,
            fee: number,
            validityStartHeight: number,
            signature?: Signature,
            networkId?: number
        )
        senderPubKey: PublicKey
        signature: Signature
    }

    class ExtendedTransaction extends Transaction {
        constructor(
            sender: Address,
            senderType: Account.Type,
            recipient: Address,
            recipientType: Account.Type,
            value: number,
            fee: number,
            validityStartHeight: number,
            flags: Transaction.Flag | number,
            data: Uint8Array,
            proof?: Uint8Array,
            networkId?: number
        )
    }

    class TransactionsProof {}
    class TransactionCache {}
    class TransactionStoreEntry {}
    class TransactionStore {}
    class TransactionReceipt {}
    class Block {}
    class IBlockchain extends Observable {}
    class BaseChain extends IBlockchain {}
    class BlockChain {}
    class HeaderChain {}
    class ChainProof {}
    class ChainData {}
    class ChainDataStore {}
    class MempoolTransactionSet {}
    class Mempool extends Observable {}
    class InvRequestManager {}
    class BaseConsensusAgent extends Observable {}
    class BaseConsensus extends Observable {}
    class FullChain extends BaseChain {}
    class FullConsensusAgent extends BaseConsensusAgent {}
    class FullConsensus extends BaseConsensus {}
    class LightChain extends FullChain {}
    class LightConsensusAgent extends FullConsensusAgent {}
    class LightConsensus extends BaseConsensus {}
    class PartialLightChain extends LightChain {}
    class NanoChain extends BaseChain {}
    class NanoConsensusAgent extends BaseConsensusAgent {}
    class NanoConsensus extends BaseConsensus {}
    class NanoMempool extends Observable {}
    class ConsensusDB {}
    class Consensus {}
    class Protocol {}
    class Message {}

    namespace Message {
        type Type = {
            VERSION:    0,
            INV:        1,
            GET_DATA:   2,
            GET_HEADER: 3,
            NOT_FOUND:  4,
            GET_BLOCKS: 5,
            BLOCK:      6,
            HEADER:     7,
            TX:         8,
            MEMPOOL:    9,
            REJECT:     10,
            SUBSCRIBE:  11,

            ADDR:       20,
            GET_ADDR:   21,
            PING:       22,
            PONG:       23,

            SIGNAL:     30,

            GET_CHAIN_PROOF:            40,
            CHAIN_PROOF:                41,
            GET_ACCOUNTS_PROOF:         42,
            ACCOUNTS_PROOF:             43,
            GET_ACCOUNTS_TREE_CHUNK:    44,
            ACCOUNTS_TREE_CHUNK:        45,
            GET_TRANSACTIONS_PROOF:     47,
            TRANSACTIONS_PROOF:         48,
            GET_TRANSACTION_RECEIPTS:   49,
            TRANSACTION_RECEIPTS:       50,
            GET_BLOCK_PROOF:            51,
            BLOCK_PROOF:                52,

            GET_HEAD:   60,
            HEAD:       61,

            VERACK:   90
        }
    }

    class AddrMessage extends Message {}
    class BlockMessage extends Message {}
    class RawBlockMessage extends Message {}
    class GetAddrMessage extends Message {}
    class GetBlocksMessage extends Message {}
    class HeaderMessage extends Message {}
    class InventoryMessage extends Message {}
    class MempoolMessage extends Message {}
    class PingMessage extends Message {}
    class PongMessage extends Message {}
    class RejectMessage extends Message {}
    class SignalMessage extends Message {}
    class SubscribeMessage extends Message {}
    class TxMessage extends Message {}
    class VersionMessage extends Message {}
    class VerAckMessage extends Message {}
    class AccountsProofMessage extends Message {}
    class GetAccountsProofMessage extends Message {}
    class ChainProofMessage extends Message {}
    class GetChainProofMessage extends Message {}
    class AccountsTreeChunkMessage extends Message {}
    class GetAccountsTreeChunkMessage extends Message {}
    class TransactionsProofMessage extends Message {}
    class GetTransactionsProofMessage extends Message {}
    class GetTransactionReceiptsMessage extends Message {}
    class TransactionReceiptsMessage extends Message {}
    class GetBlockProofMessage extends Message {}
    class BlockProofMessage extends Message {}
    class GetHeadMessage extends Message {}
    class HeadMessage extends Message {}
    class MessageFactory {}
    class WebRtcConnector extends Observable {}
    // @ts-ignore
    class WebRtcDataChannel extends DataChannel {}
    class WebRtcUtils {}
    class WebSocketConnector extends Observable {}
    // @ts-ignore
    class WebSocketDataChannel extends DataChannel {}
    class NetAddress {}
    class PeerId extends Serializable {}
    class PeerAddress {}
    class PeerAddressState {}
    class PeerAddressBook extends Observable {}

    class GenesisConfig {
        public static NETWORK_ID: number;
        public static NETWORK_NAME: string;
        public static GENESIS_BLOCK: Block;
        public static GENESIS_HASH: Hash;
        public static GENESIS_ACCOUNTS: string;
        public static SEED_PEERS: PeerAddress[];
        public static CONFIGS: {
            [key: string]: { NETWORK_ID: number }
        }
        public static main(): void;
        public static test(): void;
        public static dev(): void;
        public static bounty(): void;
    }

    class CloseType {}
    class NetworkConnection {}
    class PeerChannel {}
    class NetworkAgent {}
    class PeerConnectionStatistics {}
    class PeerConnection {}
    class SignalProcessor {}
    class ConnectionPool {}
    class PeerScorer {}
    class NetworkConfig {}
    class WsNetworkConfig extends NetworkConfig {}
    class WssNetworkConfig extends WsNetworkConfig {}
    class RtcNetworkConfig extends NetworkConfig {}
    class DumbNetworkConfig extends NetworkConfig {}
    class Network {}
    class NetUtils {}
    class PeerKeyStore {}
    class Peer {}
    class Miner extends Observable {}
    class BasePoolMiner extends Miner {}
    class SmartPoolMiner extends BasePoolMiner {}
    class NanoPoolMiner extends BasePoolMiner {}
    class Wallet {}
    class MultiSigWallet extends Wallet {}
    class WalletStore {}
    class MinerWorker {}
    class MinerWorkerImpl {}
    class MinerWorkerPool {}
}
