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
        type Level = Level.TRACE|Level.VERBOSE|Level.DEBUG|Level.INFO|Level.WARNING|Level.ERROR|Level.ASSERT;
        namespace Level {
            type TRACE = 1;
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
        public expectMessage(types: Message.Type|Message.Type[], timeoutCallback: () => any, msgTimeout?: number, chunkTimeout?: number): void;
        public abstract close(): void;
        public send(msg: Uint8Array): void;
        public abstract sendChunk(msg: Uint8Array): void;
        public abstract readyState: DataChannel.ReadyState;
        public lastMessageReceivedAt: number;
    }

    namespace DataChannel {
        type CHUNK_SIZE_MAX = 16384; // 16 kb
        type MESSAGE_SIZE_MAX = 10485760; // 10 mb
        type CHUNK_TIMEOUT = 5000; // 5 seconds
        type MESSAGE_TIMEOUT = 3200000;
        type ReadyState = ReadyState.CONNECTING|ReadyState.OPEN|ReadyState.CLOSING|ReadyState.CLOSED;
        namespace ReadyState {
            type CONNECTING = 0;
            type OPEN = 1;
            type CLOSING = 2;
            type CLOSED = 3;
            function fromString(str: string): DataChannel.ReadyState;
        }
    }

    class ExpectedMessage {
        constructor(
            types: Message.Type[],
            timeoutCallback: () => any,
            msgTimeout: number,
            chunkTimeout: number
        );
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
        constructor(provided?: number, accepted?: number);
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
        constructor(offset?: number);
        public offset: number;
        public now(): number;
    }

    class IteratorUtils {
        public static alternate<T>(...iterators: Iterator<T>[]): Iterable<T>;
    }

    class ArrayUtils {
        public static randomElement(arr: any[]): any;
        public static subarray(uintarr: Uint8Array, begin: number, end: number): Uint8Array;
        public static k_combinations(list: any[], k: number): Generator;
    }

    class HashMap<K, V> {
        constructor(fnHash?: (o: object) => string);
        public get(key: K|any): V|any;
        public put(key: K|any, value: V|any): void;
        public remove(key: K|any): void;
        public clear(): void;
        public contains(key: K|any): boolean;
        public keys(): Array<K|any>;
        public keyIterator(): Iterator<K|any>;
        public values(): Array<V|any>;
        public valueIterator(): Iterator<V|any>;
        public length: number;
        public isEmpty(): boolean;
    }

    class HashSet<V> {
        constructor(fnHash?: (o: object) => string);
        public add(value: V|any): void;
        public addAll(collection: Iterable<V|any>): void;
        public get(value: V|any): V|any;
        public remove(value: V|any): void;
        public removeAll(collection: Array<V|any>): void;
        public clear(): void;
        public contains(value: V|any): boolean;
        public values(): Array<V|any>;
        public valueIterator(): Iterator<V|any>;
        public [Symbol.iterator]: Iterator<V|any>;
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

    class InclusionHashSet<V> {
        constructor(fnHash?: (o: object) => string);
        public add(value: V|any): void;
        public addAll(collection: Iterable<V|any>): void;
        public remove(value: V|any): void;
        public removeAll(collection: Array<V|any>): void;
        public clear(): void;
        public contains(value: V|any): boolean;
        public values(): string[];
        public valueIterator(): Iterator<string>;
        public [Symbol.iterator]: Iterator<string>;
        public length: number;
        public isEmpty(): boolean;
        public clone(): InclusionHashSet<V>;
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

    class LimitIterable<T> {
        constructor(it: Iterable<T>|Iterator<T>, limit: number);
        public [Symbol.iterator](): {next: () => object};
        public static iterator<V>(iterator: Iterator<V>, limit: number): {next: () => object};
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
        constructor(
            maxAtOnce?: number,
            allowanceNum?: number,
            allowanceInterval?: number,
            maxSize?: number,
            allowanceCallback?: () => any
        );
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

    class Synchronizer extends Observable {
        constructor(throttleAfter: number, throttleWait: number);
        public push<T>(fn: () => T): Promise<T>;
        public clear(): void;
        public working: boolean;
        public length: number;
        public totalElapsed: number;
        public totalJobs: number;
        public totalThrottles: number;
    }

    class MultiSynchronizer extends Observable {
        constructor(throttleAfter: number, throttleWait: number);
        public push<T>(tag: string, fn: () => T): Promise<T>;
        public clear(): void;
        public isWorking(tag: string): boolean;
    }

    class PrioritySynchronizer extends Observable {
        constructor(
            numPriorities: number,
            throttleAfter?: number,
            throttleWait?: number
        );
        public push<T>(priority: number, fn: () => T): Promise<T>;
        public clear(): void;
        public working: boolean;
        public length: number;
        public totalElapsed: number;
        public totalJobs: number;
        public totalThrottles: number;
    }

    class RateLimit {
        constructor(allowedOccurences: number, timeRange?: number);
        public note(number?: number): boolean;
    }

    class IWorker {
        public static createProxy(clazz, name: string, worker: Worker): IWorker.Proxy;
        public static startWorkerForProxy(clazz, name: string, workerScript: string): IWorker.Proxy;
        public static stubBaseOnMessage(msg: {data: {command: string, args: any[], id: number|string}}): Promise<void>;
        public static areWorkersAsync: boolean;
        public static prepareForWorkerUse(baseClazz, impl): void;
    }

    namespace IWorker {
        type Proxy = (clazz) => any;
        function Stub(clazz): any;
        function Pool(clazz): any;
    }

    class WasmHelper {
        public static doImportBrowser(): Promise<void>;
        public static doImportNodeJs(): Promise<void>;
        public static importWasmBrowser(wasm: string, module?: string): Promise<boolean>;
        public static importWasmNodeJs(wasm: string, module?: string): boolean;
        public static importScriptBrowser(script: string, module?: string): Promise<boolean>;
        public static importScriptNodeJs(script: string, module?: string): boolean;
        public static fireModuleLoaded(module?: string): void;
    }

    class CryptoWorker {
        public static lib: CryptoLib;
        public static getInstanceAsync(): Promise<CryptoWorkerImpl>;
        public computeArgon2d(input: Uint8Array): Promise<Uint8Array>;
        public computeArgon2dBatch(input: Uint8Array[]): Promise<Uint8Array[]>;
        public kdf(key: Uint8Array, salt: Uint8Array, iterations: number): Promise<Uint8Array>;
        public blockVerify(block: Uint8Array, transactionValid: boolean[], timeNow: number, genesisHash: Uint8Array, networkId: number): Promise<{valid: boolean, pow: SerialBuffer, interlinkHash: SerialBuffer, bodyHash: SerialBuffer}>;
    }

    class CryptoWorkerImpl extends IWorker.Stub(CryptoWorker) {
        constructor();
        public init(name: string): Promise<void>;
        public computeArgon2d(input: Uint8Array): Promise<Uint8Array>;
        public computeArgon2dBatch(input: Uint8Array[]): Promise<Uint8Array[]>;
        public kdf(key: Uint8Array, salt: Uint8Array, iterations: number): Promise<Uint8Array>;
        public blockVerify(block: Uint8Array, transactionValid: boolean[], timeNow: number, genesisHash: Uint8Array, networkId: number): Promise<{valid: boolean, pow: SerialBuffer, interlinkHash: SerialBuffer, bodyHash: SerialBuffer}>;
    }

    class CRC32 {
        public static compute(buf: Uint8Array): number;
    }

    class BigNumber {
        public CloseEvent(configObject: any): BigNumber;
        constructor(n: number|string|BigNumber, b: number);
        public config(obj: any): any;
        public set(obj: any): any;
        public isBigNumber(v: any): boolean;
        public maximum(...args: BigNumber[]): BigNumber;
        public max(...args: BigNumber[]): BigNumber;
        public minimum(...args: BigNumber[]): BigNumber;
        public min(...args: BigNumber[]): BigNumber;
        public random(db: number): BigNumber;
    }

    class NumberUtils {
        public static isUint8(val: number): boolean;
        public static isUint16(val: number): boolean;
        public static isUint32(val: number): boolean;
        public static isUint64(val: number): boolean;
        public static randomUint32(): number;
        public static randomUint64(): number;
        public static fromBinary(bin: string): number;
        public static UINT8_MAX: 255;
        public static UINT16_MAX: 65535;
        public static UINT32_MAX: 4294967295;
        public static UINT64_MAX: number;
    }

    class MerkleTree {
        public static computeRoot(values: any[], fnHash?: (o: any) => Hash): Hash;
    }

    class MerklePath {
        constructor(nodes: MerklePathNode[]);
        public static compute(values: any[], leafValue: any, fnHash?: (o: any) => Hash): MerklePath;
        public computeRoot(leafValue: any, fnHash?: (o: any) => Hash): Hash;
        public static unserialize(buf: SerialBuffer): MerklePath;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public equals(o: MerklePath): boolean;
        public nodes: MerklePathNode[];
    }

    class MerklePathNode {
        constructor(hash: Hash, left: boolean);
        public hash: Hash;
        public left: boolean;
        public equals(o: MerklePathNode): boolean;
    }

    class MerkleProof {
        constructor(hashes: any[], operations: MerkleProof.Operation[]);
        public static compute(values: any[], leafValues: any[], fnHash?: (o: any) => Hash): MerkleProof;
        public static computeWithAbsence(values: any[], leafValues: any[], fnCompare: (a: any, b: any) => number, fnHash?: (o: any) => Hash): MerkleProof
        public computeRoot(leafValues: any[], fnHash?: (o: any) => Hash): Hash;
        public static unserialize(buf: SerialBuffer): MerkleProof;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public equals(o: MerkleProof): boolean;
        public nodes: Hash[];
    }

    namespace MerkleProof {
        type Operation = Operation.CONSUME_PROOF|Operation.CONSUME_INPUT|Operation.HASH;
        namespace Operation {
            type CONSUME_PROOF = 0;
            type CONSUME_INPUT = 1;
            type HASH = 2;
        }
    }

    class PlatformUtils {
        public static isBrowser(): boolean;
        public static isNodeJs(): boolean;
        public static supportsWebRTC(): boolean;
        public static supportsWS(): boolean;
        public static isOnline(): boolean;
    }

    class StringUtils {
        public static isMultibyte(str: string): boolean;
        public static isHex(str: string): boolean;
        public static isHexBytes(str: string, length?: number): boolean;
        public static commonPrefix(str1: string, str2: string): string;
        public static lpad(str: string, padString: string, length: number): string;
    }

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

    abstract class Serializable {
        public equals(o: Serializable): boolean;
        public compare(o: Serializable): number;
        public hashCode(): string;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public toString(): string;
        public toBase64(): string;
        public toHex(): string;
    }

    class Hash extends Serializable {
        constructor(arg?: Uint8Array, algorithm?: Hash.Algorithm);
        public static light(arr: Uint8Array): Hash;
        public static blake2b(arr: Uint8Array): Hash;
        public static hard(arr: Uint8Array): Promise<Hash>
        public static argon2d(arr: Uint8Array): Promise<Hash>;
        public static sha256(arr: Uint8Array): Hash;
        public static sha512(arr: Uint8Array): Hash;
        public static compute(arr: Uint8Array, algorithm: Hash.Algorithm): Hash;
        public static unserialize(buf: SerialBuffer, algorithm?: Hash.Algorithm): Hash;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public subarray(begin: number, end: number): Uint8Array;
        public serializedSize: number;
        public array: Uint8Array;
        public algorithm: Hash.Algorithm;
        public equals(o: Serializable): boolean;
        public static fromBase64(base64: string): Hash;
        public static fromHex(hex: string): Hash;
        public static fromString(str: string): Hash;
        public static isHash(o: any): boolean;
        public static getSize(algorithm: Hash.Algorithm): number;
        public static computeBlake2b(input: Uint8Array): Uint8Array;
        public static computeSha256(input: Uint8Array): Uint8Array;
        public static computeSha512(input: Uint8Array): Uint8Array;
        public static SIZE: Map<Hash.Algorithm, number>;
        public static NULL: Hash;
    }

    namespace Hash {
        type Algorithm = Algorithm.BLAKE2B|Algorithm.ARGON2D|Algorithm.SHA256|Algorithm.SHA512;
        namespace Algorithm {
            type BLAKE2B = 1;
            type ARGON2D = 2;
            type SHA256 = 3;
            type SHA512 = 4;
        }
    }

    class Entropy extends Serializable {
        constructor(arg: Uint8Array);
        public static generate(): Entropy;
        public toExtendedPrivateKey(password?: string, wordlist?: string[]): ExtendedPrivateKey;
        public toMnemonic(wordlist?: string[]): string[];
        public static unserialize(buf: SerialBuffer): Entropy;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public overwrite(entropy: Entropy): void;
        public equals(o: any): boolean;
        public static SIZE: 32;
    }

    class ExtendedPrivateKey extends Serializable {
        constructor(key: PrivateKey, chainCode: Uint8Array);
        public static generateMasterKey(seed: Uint8Array): ExtendedPrivateKey;
        public derive(index: number): ExtendedPrivateKey;
        public static isValidPath(path: string): boolean;
        public derivePath(path: string): ExtendedPrivateKey;
        public static derivePathFromSeed(path: string, seed: Uint8Array): ExtendedPrivateKey;
        public static unserialize(buf: SerialBuffer): ExtendedPrivateKey;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public equals(o: any): boolean;
        public privateKey: PrivateKey;
        public toAddress(): Address;
        public static CHAIN_CODE_SIZE: 32;
    }

    class PrivateKey extends Serializable {
        constructor(arg: Uint8Array);
        public static generate(): PrivateKey;
        public static unserialize(buf: SerialBuffer): PrivateKey;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public overwrite(privateKey: PrivateKey): void;
        public equals(o: any): boolean;
        public static SIZE: 32;
    }

    class PublicKey extends Serializable {
        public static copy(o: PublicKey): PublicKey;
        constructor(arg: Uint8Array);
        public static derive(privateKey: PrivateKey): PublicKey;
        public static sum(publicKeys: PublicKey[]): PublicKey;
        public static unserialize(buf: SerialBuffer): PublicKey;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public equals(o: any): boolean;
        public hash(): Hash;
        public compare(o: PublicKey): number;
        public toAddress(): Address;
        public toPeerId(): PeerId;
        public static SIZE: 32;
    }

    class KeyPair extends Serializable {
        constructor(
            privateKey: PrivateKey,
            publicKey: PublicKey,
            locked?: boolean,
            lockSalt?: Uint8Array
        );
        public static generate(): KeyPair;
        public static derive(privateKey: PrivateKey): KeyPair;
        public static fromHex(hexBuf: string): KeyPair;
        public static fromEncrypted(buf: SerialBuffer, key: Uint8Array): Promise<KeyPair>;
        public static unserialize(buf: SerialBuffer): KeyPair;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public privateKey: PrivateKey;
        public publicKey: PublicKey;
        public serializedSize: number;
        public exportEncrypted(key: string|Uint8Array, unlockKey?: Uint8Array): Promise<SerialBuffer>;
        public encryptedSize: number;
        public lock(key: string|Uint8Array): Promise<void>;
        public unlock(key: string|Uint8Array): Promise<void>;
        public relock(): void;
        public isLocked: boolean;
        public equals(o: any): boolean;
    }

    class RandomSecret extends Serializable {
        constructor(arg: Uint8Array);
        public static unserialize(buf: SerialBuffer): RandomSecret;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public equals(o: any): boolean;
        public static SIZE: 32;
    }

    class Signature extends Serializable {
        public static copy(o: Signature): Signature;
        constructor(args: Uint8Array);
        public static create(privateKey: PrivateKey, publicKey: PublicKey, data: Uint8Array): Signature;
        public static fromPartialSignatures(commitment: Commitment, signatures: PartialSignature[]): Signature;
        public static unserialize(buf: SerialBuffer): Signature;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public verify(publicKey: PublicKey, data: Uint8Array): boolean;
        public equals(o: any): boolean;
        public static SIZE: 64;
    }

    class Commitment extends Serializable {
        public static copy(o: Commitment): Commitment;
        public static sum(commitments: Commitment[]): Commitment;
        constructor(arg: Uint8Array);
        public static unserialize(buf: SerialBuffer): Commitment;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public equals(o: any): boolean;
        public static SIZE: 32;
    }

    class CommitmentPair extends Serializable {
        constructor(secret: RandomSecret, commitment: Commitment);
        public static generate(): CommitmentPair;
        public static unserialize(buf: SerialBuffer): CommitmentPair;
        public static fromHex(hexBuf: string): CommitmentPair;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public secret: RandomSecret;
        public commitment: Commitment;
        public serializedSize: number;
        public equals(o: any): boolean;
        public static SERIALIZED_SIZE: 96;
        public static RANDOMNESS_SIZE: 32;
    }

    class PartialSignature extends Serializable {
        constructor(arg: Uint8Array);
        public static create(privateKey: PrivateKey, publicKey: PublicKey, publicKeys: PublicKey[], secret: RandomSecret, aggregateCommitment: Commitment, data: Uint8Array): PartialSignature;
        public static unserialize(buf: SerialBuffer): PartialSignature;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public equals(o: any): boolean;
        public static SIZE: 32;
    }

    class MnemonicUtils {
        public static entropyToMnemonic(entropy: string | ArrayBuffer | Uint8Array | Entropy, wordlist?: string[]): string[];
        public static entropyToLegacyMnemonic(entropy: string | ArrayBuffer | Uint8Array | Entropy, wordlist?: string[]): string[];
        public static mnemonicToEntropy(mnemonic: string | string[], wordlist?: string[]): Entropy;
        public static legacyMnemonicToEntropy(mnemonic: string | string[], wordlist?: string[]): Entropy;
        public static mnemonicToSeed(mnemonic: string | string[], password?: string): Uint8Array;
        public static mnemonicToExtendedPrivateKey(mnemonic: string | string[], password?: string): ExtendedPrivateKey;
        public static isCollidingChecksum(entropy: Entropy): boolean;
        public static getMnemonicType(mnemonic: string | string[], wordlist?: string[]): MnemonicUtils.MnemonicType;
        public static ENGLISH_WORDLIST: string[];
        public static DEFAULT_WORDLIST: string[];
    }

    namespace MnemonicUtils {
        type MnemonicType = MnemonicType.LEGACY|MnemonicType.BIP39|MnemonicType.UNKNOWN;
        namespace MnemonicType {
            type LEGACY = 0;
            type BIP39 = 1;
            type UNKNOWN = 2;
        }
    }

    class Address extends Serializable {
        public static copy(o: Address): Address;
        public static fromHash(hash: Hash): Address;
        constructor(arg: Uint8Array);
        public static unserialize(buf: SerialBuffer): Address;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public subarray(begin: number, end: number): Uint8Array;
        public serializedSize: number;
        public equals(o: Address): boolean;
        public static fromString(str: string): Address;
        public static fromBase64(base64: string): Address;
        public static fromHex(hex: string): Address;
        public static fromUserFriendlyAddress(str: string): Address;
        public toUserFriendlyAddress(withSpaces?: boolean): string;
        public static CCODE: 'NQ';
        public static SERIALIZED_SIZE: 20;
        public static HEX_SIZE: 40;
        public static NULL: Address;
        public static CONTRACT_CREATION: Address;
    }

    abstract class Account {
        constructor(type: Account.Type, balance: number);
        public static unserialize(buf: SerialBuffer): Account;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public equals(o: any): boolean;
        public toString(): string;
        public balance: number;
        public type: number;
        public withBalance(balance: number): Account;
        public withOutgoingTransaction(transaction: Transaction, blockHeight: number, transactionCache: TransactionCache, revert?: boolean): Account;
        public withIncomingTransaction(transaction: Transaction, blockHeight: number, revert?: boolean): Account;
        public withContractCommand(transaction: Transaction, blockHeight: number, revert?: boolean): Account;
        public isInitial(): boolean;
        public isToBePruned(): boolean;
    }

    namespace Account {
        type Type = Type.BASIC|Type.VESTING|Type.HTLC;
        namespace Type {
            type BASIC = 0;
            type VESTING = 1;
            type HTLC = 2;
        }
    }

    class PrunedAccount {
        constructor(address: Address, account: Account);
        public static unserialize(buf: SerialBuffer): PrunedAccount;
        public compare(o: PrunedAccount): number;
        public address: Address;
        public account: Account;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
    }

    class BasicAccount extends Account {
        public static copy(o: BasicAccount): BasicAccount;
        constructor(balance?: number);
        public static unserialize(buf: SerialBuffer): BasicAccount;
        public equals(o: any): boolean;
        public toString(): string;
        public static verifyOutgoingTransaction(transaction: Transaction): boolean;
        public static verifyIncomingTransaction(transaction: Transaction): boolean;
        public withBalance(balance: number): BasicAccount;
        public withIncomingTransaction(transaction: Transaction, blockHeight, number, revert?: boolean): Account;
        public withContractCommand(transaction: Transaction, blockHeight, number, revert?: boolean): Account;
        public isInitial(): boolean;
        public static INITIAL: BasicAccount;
    }

    class Contract extends Account {
        constructor(type: Account.Type, balance: number);
        public static verifyIncomingTransaction(transaction: Transaction): boolean;
        public withIncomingTransaction(transaction: Transaction, blockHeight, number, revert?: boolean): Account;
        public withContractCommand(transaction: Transaction, blockHeight, number, revert?: boolean): BasicAccount|Contract;
    }

    class HashedTimeLockedContract extends Contract {
        constructor(
            balance?: number,
            sender?: Address,
            recipient?: Address,
            hashRoot?: Hash,
            hashCount?: number,
            timeout?: number,
            totalAmount?: number
        );
        public static create(balance: number, blockHeight: number, transaction: Transaction): HashedTimeLockedContract;
        public static unserialize(buf: SerialBuffer): HashedTimeLockedContract;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public sender: Address;
        public recipient: Address;
        public hashRoot: Hash;
        public hashCount: number;
        public timeout: number;
        public totalAmount: number;
        public toString(): string;
        public equals(o: any): boolean;
        public static verifyOutgoingTransaction(transaction: Transaction): boolean;
        public static verifyIncomingTransaction(transaction: Transaction): boolean;
        public withBalance(balance: number): Account;
        public withOutgoingTransaction(transaction: Transaction, blockHeight: number, transactionCache: TransactionCache, revert?: boolean): Account;
        public withIncomingTransaction(transaction: Transaction, blockHeight: number, revert?: boolean): Account;
    }

    namespace HashedTimeLockedContract {
        type ProofType = ProofType.REGULAR_TRANSFER|ProofType.EARLY_RESOLVE|ProofType.TIMEOUT_RESOLVE;
        namespace ProofType {
            type REGULAR_TRANSFER = 1;
            type EARLY_RESOLVE = 2;
            type TIMEOUT_RESOLVE = 3;
        }
    }

    class VestingContract extends Contract {
        constructor(
            balance?: number,
            owner?: Address,
            vestingStart?: number,
            vestingStepBlocks?: number,
            vestingStepAmount?: number,
            vestingTotalAmount?: number
        );
        public static create(balance: number, blockHeight: number, transaction: Transaction): VestingContract;
        public static unserialize(buf: SerialBuffer): VestingContract;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public owner: Address;
        public vestingStart: number;
        public vestingStepBlocks: number;
        public vestingStepAmount: number;
        public vestingTotalAmount: number;
        public toString(): string;
        public equals(o: any): boolean;
        public static verifyOutgoingTransaction(transaction: Transaction): boolean;
        public static verifyIncomingTransaction(transaction: Transaction): boolean;
        public withBalance(balance: number): Account;
        public withOutgoingTransaction(transaction: Transaction, blockHeight: number, transactionCache: TransactionCache, revert?: boolean): Account;
        public withIncomingTransaction(transaction: Transaction, blockHeight: number, revert?: boolean): Account;
        public getMinCap(blockHeight: number): number;
    }

    class AccountsTreeNode {
        public static terminalNode(prefix: string, account: Account): AccountsTreeNode;
        public static branchNode(prefix: string, childrenSuffixes?: string[], childrenHashes?: Hash[]): AccountsTreeNode;
        constructor(
            type,
            prefix: string,
            arg: Account|string[],
            arg2?: Hash[]
        );
        public static isTerminalType(type): boolean;
        public static isBranchType(type): boolean;
        public static unserialize(buf: SerialBuffer): AccountsTreeNode;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public getChildHash(prefix: string): false|Hash;
        public getChild(prefix: string): false|string;
        public withChild(prefix: string, childHash: Hash): AccountsTreeNode;
        public withoutChild(prefix: string): AccountsTreeNode;
        public hasChildren(): boolean;
        public hasSingleChild(): boolean;
        public getFirstChild(): undefined|string;
        public getLastChild(): undefined|string;
        public getChildren(): undefined|string[];
        public account: Account;
        public prefix: string;
        public withAccount(account: Account): AccountsTreeNode;
        public hash(): Hash;
        public isChildOf(parent: AccountsTreeNode): boolean;
        public isTerminal(): boolean;
        public isBranch(): boolean;
        public equals(o: any): boolean;
        public static BRANCH: 0x00;
        public static TERMINAL: 0xff;
    }

    class AccountsTreeStore {
        public static initPersistent(jdb: any): void;
        public static getPersistent(jdb: any): AccountsTreeStore;
        public static createVolatile(): AccountsTreeStore;
        constructor(store: any);
        public get(key: string): Promise<AccountsTreeNode>;
        public put(node: AccountsTreeNode): Promise<string>;
        public remove(node: AccountsTreeNode): Promise<string>;
        public getRootNode(): Promise<AccountsTreeNode>;
        public getTerminalNodes(startPrefix, size: number): Promise<AccountsTreeNode[]>;
        public snapshot(tx?: AccountsTreeStore): AccountsTreeStore;
        public transaction(enableWatchdog?: boolean): AccountsTreeStore;
        public synchronousTransaction(enableWatchdog?: boolean): SynchronousAccountsTreeStore;
        public truncate(): Promise<void>;
        public commit(): Promise<boolean>;
        public abort(): Promise<void>;
        public tx: any;
    }

    class AccountsTreeStoreCodec {
        public encode(obj: any): any;
        public decode(obj: any, key: string): any;
        public valueEncoding: {encode: (val: any) => any, decode: (val: any) => any, buffer: boolean, type: string}|void;
    }

    class SynchronousAccountsTreeStore extends AccountsTreeStore {
        constructor(store);
        public preload(keys: string[]): void;
        public getSync(key: string, expectedToBePresent?: boolean): AccountsTreeNode;
        public putSync(node: AccountsTreeNode): string;
        public removeSync(node: AccountsTreeNode): string;
        public getRootNodeSync(): AccountsTreeNode;
    }

    class AccountsProof {
        constructor(nodes: AccountsTreeNode[]);
        public static unserialize(buf: SerialBuffer): AccountsProof;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public verify(): boolean;
        public getAccount(address: Address): null|Account;
        public toString(): string;
        public root(): Hash;
        public length: number;
        public nodes: AccountsTreeNode[];
    }

    class AccountsTreeChunk {
        constructor(nodes: AccountsTreeNode[], proof: AccountsProof);
        public static unserialize(buf: SerialBuffer): AccountsTreeChunk;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public verify(): boolean;
        public toString(): string;
        public root(): Hash;
        public terminalNodes: AccountsTreeNode[];
        public proof: AccountsProof;
        public head: AccountsTreeNode;
        public tail: AccountsTreeNode;
        public length: number;
        public static SIZE_MAX: 1000;
        public static EMPTY: AccountsTreeChunk;
    }

    class AccountsTree extends Observable {
        public static getPersistent(jdb: any): Promise<AccountsTree>;
        public static createVolatile(): Promise<AccountsTree>;
        constructor(store: AccountsTreeStore);
        public put(address: Address, account: Account): Promise<void>;
        public get(address: Address): Promise<null|Account>;
        public getAccountsProof(addresses: Address[]): Promise<AccountsProof>;
        public getChunk(startPrefix: string, size: number): Promise<AccountsTreeChunk>;
        public transaction(enableWatchdog?: boolean): Promise<AccountsTree>;
        public synchronousTransaction(enableWatchdog?: boolean): Promise<SynchronousAccountsTree>;
        public partialTree(): Promise<PartialAccountsTree>;
        public snapshot(tx?: AccountsTree): Promise<AccountsTree>;
        public commit(): Promise<boolean>;
        public abort(): Promise<void>;
        public root(): Promise<Hash>;
        public tx: any;
        public isEmpty(): Promise<boolean>;
    }

    class SynchronousAccountsTree extends AccountsTree {
        constructor(store: SynchronousAccountsTreeStore);
        public preloadAddresses(addresses: Address[]): Promise<void>;
        public putSync(address: Address, account: Account): void;
        public getSync(address: Address, expectedToBePresent?: boolean): null|Account;
        public rootSync(): Hash;
    }

    class PartialAccountsTree extends SynchronousAccountsTree {
        constructor(store: SynchronousAccountsTreeStore);
        public pushChunk(chunk: AccountsTreeChunk): Promise<PartialAccountsTree.Status>;
        public complete: boolean;
        public missingPrefix: string;
        // @ts-ignore
        public synchronousTransaction(enableWatchdog?: boolean): PartialAccountsTree;
        // @ts-ignore
        public transaction(enableWatchdog?: boolean): AccountsTree;
        public commit(): Promise<boolean>;
        public abort(): Promise<void>;
    }

    namespace PartialAccountsTree {
        type Status = Status.ERR_HASH_MISMATCH|Status.ERR_INCORRECT_PROOF|Status.ERR_UNMERGEABLE|Status.OK_COMPLETE|Status.OK_UNFINISHED;
        namespace Status {
            type ERR_HASH_MISMATCH = -3;
            type ERR_INCORRECT_PROOF = -2;
            type ERR_UNMERGEABLE = -1;
            type OK_COMPLETE = 0;
            type OK_UNFINISHED = 1;
        }
    }

    class Accounts extends Observable {
        public static getPersistent(jdb: any): Promise<Accounts>;
        public static createVolatile(): Promise<Accounts>;
        constructor(accountsTree: AccountsTree);
        public initialize(genesisBlock: Block, encodedAccounts: string): Promise<void>;
        public getAccountsProof(addresses: Address[]): Promise<AccountsProof>;
        public getAccountsTreeChunk(startPrefix: string): Promise<AccountsTreeChunk>;
        public commitBlock(block: Block, transactionCache: TransactionCache): Promise<void>;
        public commitBlockBody(body: BlockBody, blockHeight: number, transactionCache: TransactionCache): Promise<void>;
        public gatherToBePrunedAccounts(transactions: Transaction[], blockHeight: number, transactionCache: TransactionCache): Promise<PrunedAccount[]>;
        public revertBlock(block: Block, transactionCache: TransactionCache): Promise<void>;
        public revertBlockBody(body: BlockBody, blockHeight: number, transactionCache: TransactionCache): Promise<void>;
        public get(address: Address, accountType?: Account.Type, tree?: AccountsTree): Promise<Account>;
        public transaction(enableWatchdog?: boolean): Promise<Accounts>;
        public snapshot(tx: Accounts): Promise<Accounts>;
        public partialAccountsTree(): Promise<PartialAccountsTree>;
        public commit(): Promise<void>;
        public abort(): Promise<void>;
        public hash(): Promise<Hash>;
        public tx: any;
    }

    class BlockHeader {
        constructor(
            prevHash: Hash,
            interlinkHash: Hash,
            bodyHash: Hash,
            accountsHash: Hash,
            nBits: number,
            height: number,
            timestamp: number,
            nonce: number,
            version?: number
        );
        public static unserialize(buf: SerialBuffer): BlockHeader;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public verifyProofOfWork(buf?: SerialBuffer): Promise<boolean>;
        public isImmediateSuccessorOf(prevHeader: BlockHeader): boolean;
        public hash(buf?: SerialBuffer): Hash;
        public pow(buf?: SerialBuffer): Promise<Hash>;
        public equals(o: any): boolean;
        public toString(): string;
        public version: number;
        public prevHash: Hash;
        public interlinkHash: Hash;
        public bodyHash: Hash;
        public accountsHash: Hash;
        public nBits: number;
        public target: BigNumber;
        public difficulty: BigNumber;
        public height: number;
        public timestamp: number;
        public nonce: number;
        public static CURRENT_VERSION: number;
        public static SUPPORTED_VERSIONS: number[];
        public static SERIALIZED_SIZE: 146;
    }

    namespace BlockHeader {
        type Version = Version.V1;
        namespace Version {
            type V1 = 1;
        }
    }

    class BlockInterlink {
        constructor(
            hashes: Hash[],
            prevHash?: Hash,
            repeatBits?: Uint8Array,
            compressed?: Hash[]
        );
        public static unserialize(buf: SerialBuffer): BlockInterlink;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public equals(o: any): boolean;
        public hash(): Hash;
        public hashes: Hash[];
        public length: number;
    }

    class BlockBody {
        public static getMetadataSize(extraData: Uint8Array): number;
        constructor(
            minerAddr: Address,
            transactions: Transaction[],
            extraData?: Uint8Array,
            prunedAccounts?: PrunedAccount[]
        );
        public static unserialize(buf: SerialBuffer): BlockBody;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public verify(): boolean;
        public getMerkleLeafs(): any[];
        public hash(): Hash;
        public equals(o: any): boolean;
        public getAddresses(): Address[];
        public extraData: Uint8Array;
        public minerAddr: Address;
        public transactions: Transaction[];
        public transactionCount: number;
        public prunedAccounts: PrunedAccount[];
    }

    class BlockUtils {
        public static compactToTarget(compact: number): BigNumber;
        public static targetToCompact(target: BigNumber): number;
        public static getTargetHeight(target: BigNumber): number;
        public static getTargetDepth(target: BigNumber): number;
        public static compactToDifficulty(compact: number): BigNumber;
        public static difficultyToCompact(difficulty: BigNumber): number;
        public static difficultyToTarget(difficulty: BigNumber): BigNumber;
        public static targetToDifficulty(target: BigNumber): BigNumber;
        public static hashToTarget(hash: Hash): BigNumber;
        public static realDifficulty(hash: Hash): BigNumber;
        public static getHashDepth(hash: Hash): number;
        public static isProofOfWork(hash: Hash, target: number): boolean;
        public static isValidCompact(compact: number): boolean;
        public static isValidTarget(target: BigNumber): boolean;
        public static getNextTarget(headBlock: BlockHeader, tailBlock: BlockHeader, deltaTotalDifficulty: BigNumber): BigNumber;
    }

    class Subscription {
        public static fromAddresses(addresses: Address[]): Subscription;
        public static fromMinFeePerByte(minFeePerByte: number): Subscription;
        constructor(type: Subscription.Type, filter?: Address[]|number);
        public static unserialize(buf: SerialBuffer): Subscription;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public matchesBlock(block: Block): boolean;
        public matchesTransaction(transaction: Transaction): boolean;
        public toString(): string;
        public type: Subscription.Type;
        public addresses: Address[];
        public minFeePerByte: number;
        public static NONE: Subscription;
        public static BLOCKS_ONLY: Subscription;
        public static ANY: Subscription;
    }

    namespace Subscription {
        type Type = Type.NONE|Type.ANY|Type.ADDRESSES|Type.MIN_FEE;
        namespace Type {
            type NONE = 0;
            type ANY = 1;
            type ADDRESSES = 2;
            type MIN_FEE = 3;
        }
    }

    abstract class Transaction {
        constructor(
            format: Transaction.Format,
            sender: Address,
            senderType: Account.Type,
            recipient: Address,
            recipientType: Account.Type,
            value: number,
            fee: number,
            validityStartHeight: number,
            flags: Transaction.Flag|any,
            data: Uint8Array,
            proof?: Uint8Array,
            networkId?: number
        );
        public static unserialize(buf: SerialBuffer): Transaction;
        public serializeContent(buf?: SerialBuffer): SerialBuffer;
        public serializedContentSize: number;
        public verify(networkId?: number): boolean;
        public serializedSize: number;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public hash(): Hash;
        public compare(o: Transaction): -1|0|1;
        public compareBlockOrder(o: Transaction): -1|0|1;
        public equals(o: any): boolean;
        public toString(): string;
        public getContractCreationAddress(): Address;
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
        public hasFlag(flag: number): boolean;
        public data: Uint8Array;
        public proof: Uint8Array;
    }

    namespace Transaction {
        type Format = Format.BASIC|Format.EXTENDED;
        namespace Format {
            type BASIC = 0;
            type EXTENDED = 1;
        }
        type Flag = Flag.NONE|Flag.CONTRACT_CREATION;
        namespace Flag {
            type NONE = 1;
            type CONTRACT_CREATION = 0b1;
        }
    }

    class SignatureProof {
        public static verifyTransaction(transaction: Transaction): boolean;
        public static singleSig(publicKey: PublicKey, signature: Signature): SignatureProof;
        public static multiSig(signerKey: PublicKey, publicKeys: PublicKey[], signature: Signature): SignatureProof;
        constructor(
            publicKey: PublicKey,
            merklePath: MerklePath,
            signature: Signature
        );
        public static unserialize(buf: SerialBuffer): SignatureProof;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public equals(o: any): boolean;
        public verify(address: Address|null, data: Uint8Array): boolean;
        public isSignedBy(sender: Address): boolean;
        public publicKey: PublicKey;
        public merklePath: MerklePath;
        public signature: Signature;
    }

    class BasicTransaction extends Transaction {
        constructor(
            senderPublicKey: PublicKey,
            recipient: Address,
            value: number,
            fee: number,
            validityStartHeight: number,
            signature?: Signature,
            networkId?: number
        );
        public static unserialize(buf: SerialBuffer): BasicTransaction;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
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
        );
        public static unserialize(buf: SerialBuffer): ExtendedTransaction;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
    }

    class TransactionsProof {
        constructor(transactions: Transaction[], proof: MerkleProof);
        public static unserialize(buf: SerialBuffer): TransactionsProof;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public toString(): string;
        public root(): Hash;
        public length: number;
        public transactions: Transaction[];
        public proof: MerkleProof;
    }

    type BlockDescriptor = object;

    class TransactionCache {
        constructor(transactionHashes?: InclusionHashSet<Hash>, blockOrder?: BlockDescriptor[]);
        public containsTransaction(transaction: Transaction): boolean;
        public pushBlock(block: Block): void;
        public shiftBlock(): void;
        public revertBlock(block: Block): number;
        public prependBlocks(blocks: Block[]): void;
        public missingBlocks: number;
        public transactions: InclusionHashSet<Hash>;
        public clone(): TransactionCache;
        public isEmpty(): boolean;
        public head: null|BlockDescriptor;
        public tail: null|BlockDescriptor;
    }

    class TransactionStoreEntry {
        constructor(
            transactionHash: Hash,
            sender: Address,
            recipient: Address,
            blockHeight: number,
            blockHash: Hash,
            index: number
        );
        public static fromBlock(block: Block): TransactionStoreEntry[];
        public static fromJSON(id: string, o: {transactionHashBuffer: Uint8Array, senderBuffer: Uint8Array, recipientBuffer: Uint8Array, blockHeight: number, blockHash: string, index: number}): TransactionStoreEntry;
        public toJSON(): {transactionHashBuffer: Uint8Array, senderBuffer: Uint8Array, recipientBuffer: Uint8Array, blockHeight: number, blockHash: string, index: number};
        public transactionHash: Hash;
        public sender: Address;
        public recipient: Address;
        public blockHeight: number;
        public blockHash: Hash;
        public index: number;
    }

    class TransactionStore {
        public static initPersistent(jdb: any): void;
        public static getPersistent(jdb: any): TransactionStore;
        public static createVolatile(): TransactionStore;
        constructor(store: any);
        public get(transactionHash: Hash): Promise<TransactionStoreEntry>;
        public getBySender(sender: Address, limit?: number): Promise<TransactionStoreEntry[]>;
        public getByRecipient(recipient: Address, limit?: number): Promise<TransactionStoreEntry[]>;
        public put(block: Block): Promise<void>;
        public remove(block: Block): Promise<void>;
        public snapshot(tx: TransactionStore): TransactionStore;
        public transaction(enableWatchdog?: boolean): TransactionStore;
        public truncate(): Promise<void>;
        public commit(): Promise<boolean>;
        public abort(): Promise<void>;
        public tx: any;
        public static CURRENT_ID_KEY: number;
    }

    class TransactionStoreCodec {
        public encode(obj: any): any;
        public decode(obj: any, key: string): any;
        public valueEncoding: {encode: (val: any) => any, decode: (val: any) => any, buffer: boolean, type: string}|void;
    }

    class TransactionReceipt {
        constructor(
            transactionHash: Hash,
            blockHash: Hash,
            blockHeight: number
        );
        public static unserialize(buf: SerialBuffer): TransactionReceipt;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public transactionHash: Hash;
        public blockHash: Hash;
        public blockHeight: number;
    }

    class Block {
        constructor(
            header: BlockHeader,
            interlink: BlockInterlink,
            body?: BlockBody
        );
        public static unserialize(buf: SerialBuffer): Block;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public verify(time: Time): Promise<boolean>;
        public isImmediateSuccessorOf(predecessor: Block): Promise<boolean>;
        public isInterlinkSuccessorOf(predecessor: Block): Promise<boolean>;
        public isSuccessorOf(predecessor: Block): Promise<boolean>;
        public getNextInterlink(nextTarget: BigNumber, nextVersion?: number): Promise<BlockInterlink>;
        public shallowCopy(): Block;
        public equals(o: any): boolean;
        public isLight(): boolean;
        public isFull(): boolean;
        public toLight(): Block;
        public toFull(body: BlockBody): Block;
        public header: BlockHeader;
        public interlink: BlockInterlink;
        public body: BlockBody;
        public version: number;
        public prevHash: Hash;
        public bodyHash: Hash;
        public accountsHash: Hash;
        public nBits: number;
        public target: BigNumber;
        public difficulty: BigNumber;
        public height: number;
        public timestamp: number;
        public nonce: number;
        public minerAddr: Address;
        public transactions: Transaction[];
        public transactionCount: number;
        public hash(buf?: SerialBuffer): Hash;
        public pow(buf?: SerialBuffer): Promise<Hash>;
        public toString(): string;
        public static TIMESTAMP_DRIFT_MAX: 600 /* seconds */; // 10 minutes
    }

    abstract class IBlockchain extends Observable {
        abstract head: Block;
        abstract headHash: Hash;
        abstract height: number;
    }

    abstract class BaseChain extends IBlockchain {
        constructor(store: ChainDataStore);
        public getBlock(hash: Hash, includeForks?: boolean, includeBody?: boolean): Promise<null|Block>;
        public getRawBlock(hash: Hash, includeForks?: boolean): Promise<null|Uint8Array>;
        public getBlockAt(height: number, includeBody?: boolean): Promise<null|Block>;
        public getNearestBlockAt(height: number, lower?: boolean): Promise<null|Block>;
        public getSuccessorBlocks(block: Block): Promise<Block[]>;
        public getBlockLocators(): Promise<Hash[]>;
        public getNextTarget(block?: Block, next?: Block): Promise<BigNumber>;
        public static manyPow(headers: BlockHeader[]): Promise<void>;
        public isBetterProof(proof1: ChainProof, proof2: ChainProof, m: number): Promise<boolean>;
        public static MULTILEVEL_STRATEGY: BaseChain.MultilevelStrategy.MODERATE;
    }

    namespace BaseChain {
        type MultilevelStrategy = BaseChain.MultilevelStrategy.STRICT|BaseChain.MultilevelStrategy.MODERATE|BaseChain.MultilevelStrategy.RELAXED;
        namespace MultilevelStrategy {
            type STRICT = 1;
            type MODERATE = 2;
            type RELAXED = 3;
        }
    }

    class BlockChain {
        public static merge(chain1: BlockChain, chain2: BlockChain): BlockChain;
        public static lowestCommonAncestor(chain1: BlockChain, chain2: BlockChain): undefined|Block;
        constructor(blocks: Block[], superChains?: BlockChain[]);
        public static unserialize(buf: SerialBuffer): BlockChain;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public verify(): Promise<boolean>;
        public denseSuffix(): Block[];
        public getSuperChains(): Promise<BlockChain[]>;
        public isAnchored(): boolean;
        public toString(): string;
        public length: number;
        public blocks: Block[];
        public head: Block;
        public tail: Block;
        public totalDifficulty(): number;
    }

    class HeaderChain {
        constructor(headers: BlockHeader[]);
        public static unserialize(buf: SerialBuffer): HeaderChain;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public verify(): Promise<boolean>;
        public toString(): string;
        public length: number;
        public headers: BlockHeader[];
        public head: BlockHeader;
        public tail: BlockHeader;
        public totalDifficulty(): BigNumber;
    }

    class ChainProof {
        constructor(prefix: BlockChain, suffix: HeaderChain);
        public static unserialize(buf: SerialBuffer): ChainProof;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public verify(): Promise<boolean>;
        public toString(): string;
        public prefix: BlockChain;
        public suffix: HeaderChain;
        public head: BlockHeader;
    }

    class ChainData {
        public static initial(block: Block, superBlockCounts: SuperBlockCounts): Promise<ChainData>;
        constructor(
            head: Block,
            totalDifficulty: BigNumber,
            totalWork: BigNumber,
            superBlockCounts: SuperBlockCounts,
            onMainChain?: boolean,
            mainChainSuccessor?: Hash
        );
        public toObj(): {_head: SerialBuffer, _totalDifficulty: string, _totalWork: string, _superBlockCounts: number[], _onMainChain: boolean, _mainChainSuccessor: null|SerialBuffer, _height: number, _pow: SerialBuffer};
        public static fromObj(obj: {_head: Uint8Array, _totalDifficulty: string, _totalWork: string, _superBlockCounts: number[], _onMainChain: boolean, _mainChainSuccessor: null|Uint8Array, _height: number, _pow: Uint8Array}, hashBase64?: string): ChainData;
        public shallowCopy(): ChainData;
        public nextChainData(block: Block): Promise<ChainData>;
        public previousChainData(block: Block): Promise<ChainData>;
        public head: Block;
        public totalDifficulty: BigNumber;
        public totalWork: BigNumber;
        public superBlockCounts: SuperBlockCounts;
        public onMainChain: boolean;
        public mainChainSuccessor: Hash;
    }

    class SuperBlockCounts {
        constructor(array: number[]);
        public add(depth: number): void;
        public subtract(depth: number): void;
        public copyAndAdd(depth: number): SuperBlockCounts;
        public copyAndSubtract(depth: number): SuperBlockCounts;
        public get(depth: number): number;
        public getCandidateDepth(m: number): number;
        public length: number;
        public array: number[];
    }

    class ChainDataStore {
        public static initPersistent(jdb: any): void;
        public static getPersistent(jdb: any): ChainDataStore;
        public static createVolatile(): ChainDataStore;
        constructor(chainStore: any, blockStore: any);
        public getChainData(key: Hash, includeBody?: boolean): Promise<null|ChainData>;
        public putChainData(key: Hash, chainData: ChainData, includeBody?: boolean): Promise<void>;
        public putChainDataSync(key: Hash, chainData: ChainData, includeBody?: boolean): void;
        public getBlock(key: Hash, includeBody?: boolean): null|Block;
        public getRawBlock(key: Hash, includeForks?: boolean): Promise<null|Uint8Array>;
        public getChainDataCandidatesAt(height: number): Promise<ChainData[]>;
        public getChainDataAt(height: number, includeBody?: boolean): Promise<undefined|null|ChainData>;
        public getBlockAt(height: number, includeBody?: boolean): Promise<null|Block>;
        public getSuccessorBlocks(block: Block): Promise<Block[]>;
        public getNearestBlockAt(height: number, lower?: boolean): Promise<undefined|null|Block>;
        public getBlocks(startBlockHash: Hash, count?: number, forward?: boolean): Promise<Block[]>;
        public getBlocksForward(startBlockHash: Hash, count?: number): Promise<Block[]>;
        public getBlocksBackward(startBlockHash: Hash, count?: number, includeBody?: boolean): Promise<Block[]>;
        public getHead(): Promise<undefined|Hash>;
        public setHead(key: Hash): Promise<void>;
        public setHeadSync(key: Hash): void;
        public transaction(enableWatchdog?: boolean): ChainDataStore;
        public synchronousTransaction(enableWatchdog?: boolean): ChainDataStore;
        public commit(): Promise<void>;
        public abort(): Promise<void>;
        public snapshot(): ChainDataStore;
        public truncate(): Promise<void>;
        public txs: any[];
        public static CHAINDATA_CACHING_ENABLED: true;
        public static CHAINDATA_CACHE_SIZE: 5000;
        public static BLOCKS_CACHING_ENABLED: true;
        public static BLOCKS_CACHE_SIZE: 0;
        public static BLOCKS_RAW_CACHE_SIZE: 500;
    }

    class ChainDataStoreCodec {
        public encode(obj: any): any;
        public decode(obj: any, key: string): any;
        public valueEncoding: {encode: (val: any) => any, decode: (val: any) => any, buffer: boolean, type: string}|void;
    }

    class BlockStoreCodec {
        public encode(obj: any): any;
        public decode(obj: any, key: string): any;
        public valueEncoding: {encode: (val: any) => any, decode: (val: any) => any, buffer: boolean, type: string}|void;
    }

    class MempoolTransactionSet {
        constructor(sortedTransactions: Transaction[]);
        public add(transaction: Transaction): MempoolTransactionSet;
        public remove(transaction: Transaction): MempoolTransactionSet;
        public copyAndAdd(transaction: Transaction): MempoolTransactionSet;
        public transactions: Transaction[];
        public sender: Address;
        public senderType: undefined|Account.Type;
        public length: number;
        public numBelowFeePerByte(feePerByte: number): number;
        public toString(): string;
    }

    class Mempool extends Observable {
        constructor(blockchain: IBlockchain, accounts: Accounts);
        public pushTransaction(transaction: Transaction): Promise<Mempool.ReturnCode>;
        public getTransaction(hash: Hash): Transaction;
        // public *transactionGenerator(maxSize?: number, minFeePerByte?: number): Transaction[];
        public getTransactions(maxSize?: number, minFeePerByte?: number): Transaction[];
        public getTransactionsForBlock(maxSize: number): Promise<Transaction[]>;
        public getPendingTransactions(address: Address): Transaction[];
        public getTransactionsBySender(address: Address): Transaction[];
        public getTransactionsByRecipient(address: Address): Transaction[];
        public getTransactionsByAddresses(addresses: Address[], maxTransactions?: number): Transaction[];
        public evictBelowMinFeePerByte(minFeePerByte: number): void;
        public length: number;
        public queue: Synchronizer;
        public static TRANSACTION_RELAY_FEE_MIN: 1;
        public static TRANSACTIONS_PER_SENDER_MAX: 500;
        public static FREE_TRANSACTIONS_PER_SENDER_MAX: 10;
        public static SIZE_MAX: 100000;
    }

    namespace Mempool {
        type ReturnCode = ReturnCode.FEE_TOO_LOW|ReturnCode.INVALID|ReturnCode.ACCEPTED|ReturnCode.KNOWN;
        namespace ReturnCode {
            type FEE_TOO_LOW = -2;
            type INVALID = -1;
            type ACCEPTED = 1;
            type KNOWN = 2;
        }
    }

    class InvRequestManager {
        constructor();
        public askToRequestVector(agent: BaseConsensusAgent, vector: InvVector): void;
        public noteVectorNotReceived(agent: BaseConsensusAgent, vector: InvVector): void;
        public noteVectorReceived(vector: InvVector): void;
        public static MAX_TIME_PER_VECTOR: 10000;
        public static MAX_INV_MANAGED: 10000;
    }

    class BaseConsensusAgent extends Observable {
        constructor(
            time: Time,
            peer: Peer,
            invRequestManager: InvRequestManager,
            targetSubscription?: Subscription
        );
        public onHeadUpdated(): void;
        public subscribe(subscription: Subscription): void;
        public relayBlock(block: Block): boolean;
        public relayTransaction(transaction: Transaction): boolean;
        public removeTransaction(transaction: Transaction): void;
        public knowsBlock(blockHash: Hash): boolean;
        public requestVector(...vector: InvVector[]): void;
        public getBlockProof(blockHashToProve: Hash, knownBlock: Block): Promise<Block>;
        public getTransactionProof(block: Block, addresses: Address[]): Promise<Transaction[]>;
        public getTransactionReceipts(address: Address): Promise<TransactionReceipt[]>;
        public peer: Peer;
        public synced: boolean;
        public syncing: boolean;
        public static REQUEST_THRESHOLD: 50;
        public static REQUEST_THROTTLE: 500;
        public static REQUEST_TIMEOUT: 10000;
        public static REQUEST_TRANSACTIONS_WAITING_MAX: 5000;
        public static REQUEST_BLOCKS_WAITING_MAX: 5000;
        public static BLOCK_PROOF_REQUEST_TIMEOUT: 10000;
        public static TRANSACTIONS_PROOF_REQUEST_TIMEOUT: 10000;
        public static TRANSACTION_RECEIPTS_REQUEST_TIMEOUT: 15000;
        public static TRANSACTION_RELAY_INTERVAL: 5000;
        public static TRANSACTIONS_AT_ONCE: 100;
        public static TRANSACTIONS_PER_SECOND: 10;
        public static FREE_TRANSACTION_RELAY_INTERVAL: 6000;
        public static FREE_TRANSACTIONS_AT_ONCE: 10;
        public static FREE_TRANSACTIONS_PER_SECOND: 1;
        public static FREE_TRANSACTION_SIZE_PER_INTERVAL: 15000; // ~100 legacy transactions
        public static TRANSACTION_RELAY_FEE_MIN: 1;
        public static SUBSCRIPTION_CHANGE_GRACE_PERIOD: 2000;
        public static HEAD_REQUEST_INTERVAL: 100000; // 100 seconds, give client time to announce new head without request
        public static KNOWN_OBJECTS_COUNT_MAX: 40000;
    }

    // Not registered globally
    // class FreeTransactionVector {
    //     constructor(inv: InvVector, serializedSize: number);
    //     public hashCode(): string;
    //     public toString(): string;
    //     public inv: InvVector;
    //     public serializedSize: number;
    // }

    class BaseConsensus extends Observable {
        constructor(
            blockchain: BaseChain,
            mempool: Observable,
            network: Network
        );
        public subscribe(subscription: Subscription): void;
        public established: boolean;
        public network: Network;
        public invRequestManager: InvRequestManager;
        public static SYNC_THROTTLE: 1500; // ms
        public static MIN_FULL_NODES: 1;
    }

    class FullChain extends BaseChain {
        public static getPersistent(jdb: any, accounts: Accounts, time: Time, transactionStore?: TransactionStore): Promise<FullChain>;
        public static createVolatile(accounts: Accounts, time: Time, transactionStore?: TransactionStore): Promise<FullChain>;
        constructor(
            store: ChainDataStore,
            accounts: Accounts,
            time: Time,
            transactionStore?: TransactionStore
        );
        public pushBlock(block: Block): Promise<number>;
        public getBlocks(startBlockHash: Hash, count?: number, forward?: boolean): Promise<Block[]>;
        public getChainProof(): Promise<ChainProof>;
        public getBlockProof(blockToProve: Block, knownBlock: Block): Promise<null|BlockChain>;
        public getAccountsTreeChunk(blockHash: Hash, startPrefix: string): Promise<null|AccountsTreeChunk>;
        public getAccountsProof(blockHash: Hash, addresses: Address[]): Promise<null|AccountsProof>;
        public getTransactionsProof(blockHash: Hash, addresses: Address[]): Promise<null|TransactionsProof>;
        public getTransactionReceiptsByAddress(address: Address, limit?: number): Promise<TransactionReceipt[]>;
        public getTransactionInfoByHash(transactionHash: Hash): Promise<null|TransactionStoreEntry>;
        public head: Block;
        public headHash: Hash;
        public height: number;
        public totalDifficulty: BigNumber;
        public totalWork: BigNumber;
        public accounts: Accounts;
        public transactionCache: TransactionCache;
        public blockForkedCount: number;
        public blockRebranchedCount: number;
        public blockExtendedCount: number;
        public blockOrphanCount: number;
        public blockInvalidCount: number;
        public blockKnownCount: number;
        public accountsHash(): Promise<Hash>;
        public queue(): PrioritySynchronizer;
        public static ERR_ORPHAN: -2;
        public static ERR_INVALID: -1;
        public static OK_KNOWN: 0;
        public static OK_EXTENDED: 1;
        public static OK_REBRANCHED: 2;
        public static OK_FORKED: 3;
        public static SYNCHRONIZER_THROTTLE_AFTER: 500; // ms
        public static SYNCHRONIZER_THROTTLE_WAIT: 30; // ms
    }

    class FullConsensusAgent extends BaseConsensusAgent {
        constructor(
            blockchain: FullChain,
            mempool: Mempool,
            time: Time,
            peer: Peer,
            invRequestManager: InvRequestManager,
            targetSubscription: Subscription
        );
        public syncBlockchain(): void;
        public syncing: boolean;
        public static SYNC_ATTEMPTS_MAX: number;
        public static GETBLOCKS_VECTORS_MAX: 500;
        public static RESYNC_THROTTLE: 3000; // 3 seconds
        public static MEMPOOL_DELAY_MIN: 2000; // 2 seconds
        public static MEMPOOL_DELAY_MAX: 20000; // 20 seconds
        public static MEMPOOL_THROTTLE: 1000;
        public static MEMPOOL_ENTRIES_MAX: 10000;
        public static CHAIN_PROOF_RATE_LIMIT: 3; // per minute
        public static ACCOUNTS_PROOF_RATE_LIMIT: 60; // per minute
        public static ACCOUNTS_TREE_CHUNK_RATE_LIMIT: 120; // per minute
        public static TRANSACTION_PROOF_RATE_LIMIT: 60; // per minute
        public static TRANSACTION_RECEIPTS_RATE_LIMIT: 30; // per minute
        public static BLOCK_PROOF_RATE_LIMIT: 60; // per minute
        public static GET_BLOCKS_RATE_LIMIT: 30; // per minute
    }

    class FullConsensus extends BaseConsensus {
        constructor(
            blockchain: FullChain,
            mempool: Mempool,
            network: Network
        );
        public subscribeMinFeePerByte(minFeePerByte: number): void;
        public minFeePerByte: number;
        public blockchain: FullChain;
        public mempool: Mempool;
    }

    class LightChain extends FullChain {
        public static getPersistent(jdb: any, accounts: Accounts, time: Time): Promise<LightChain>;
        public static createVolatile(accounts: Accounts, time: Time): Promise<LightChain>;
        constructor(
            store: ChainDataStore,
            accounts: Accounts,
            time: Time
        );
        public partialChain(): PartialLightChain;
    }

    class LightConsensusAgent extends FullConsensusAgent {
        constructor(
            blockchain: LightChain,
            mempool: Mempool,
            time: Time,
            peer: Peer,
            invRequestManager: InvRequestManager,
            targetSubscription: Subscription
        );
        public syncBlockchain(): Promise<void>;
        public getHeader(hash: Hash): Promise<BlockHeader>;
        public syncing: boolean;
        public static CHAINPROOF_REQUEST_TIMEOUT: 45000;
        public static CHAINPROOF_CHUNK_TIMEOUT: 10000;
        public static ACCOUNTS_TREE_CHUNK_REQUEST_TIMEOUT: 8000;
        public static SYNC_ATTEMPTS_MAX: number;
        public static GETBLOCKS_VECTORS_MAX: 500;
        public static WEAK_PROOFS_MAX: 3;
    }

    class LightConsensus extends BaseConsensus {
        constructor(
            blockchain: LightChain,
            mempool: Mempool,
            network: Network
        );
        public blockchain: LightChain;
        public mempool: Mempool;
    }

    class PartialLightChain extends LightChain {
        constructor(
            store: ChainDataStore,
            accounts: Accounts,
            time: Time,
            proof: ChainProof,
            commitSynchronizer: PrioritySynchronizer
        );
        public pushProof(proof: ChainProof): Promise<boolean>;
        public pushAccountsTreeChunk(chunk: AccountsTreeChunk): Promise<PartialAccountsTree.Status>;
        public commit(): Promise<boolean>;
        public abort(): Promise<void>;
        public getMissingAccountsPrefix(): string;
        // @ts-ignore
        public getBlockLocators(): Hash[];
        public numBlocksNeeded(): number;
        public needsMoreBlocks(): boolean;
        public state: PartialLightChain.State;
        public proofHeadHeight: number;
    }

    namespace PartialLightChain {
        type State = State.WEAK_PROOF|State.ABORTED|State.PROVE_CHAIN|State.PROVE_ACCOUNTS_TREE|State.PROVE_BLOCKS|State.COMPLETE;
        namespace State {
            type WEAK_PROOF = -2;
            type ABORTED = -1;
            type PROVE_CHAIN = 0;
            type PROVE_ACCOUNTS_TREE = 1;
            type PROVE_BLOCKS = 2;
            type COMPLETE = 3;
        }
    }

    class NanoChain extends BaseChain {
        // @ts-ignore
        constructor(time: Time): Promise<NanoChain>;
        public pushProof(proof: ChainProof): Promise<boolean>;
        public pushHeader(header: BlockHeader): Promise<number>;
        public getChainProof(): Promise<ChainProof>;
        public head: Block;
        public headHash: Hash;
        public height: number;
        public static ERR_ORPHAN: -2;
        public static ERR_INVALID: -1;
        public static OK_KNOWN: 0;
        public static OK_EXTENDED: 1;
        public static OK_REBRANCHED: 2;
        public static OK_FORKED: 3;
        public static SYNCHRONIZER_THROTTLE_AFTER: 500; // ms
        public static SYNCHRONIZER_THROTTLE_WAIT: 30; // ms
    }

    class NanoConsensusAgent extends BaseConsensusAgent {
        constructor(
            blockchain: NanoChain,
            mempool: NanoMempool,
            time: Time,
            peer: Peer,
            invRequestManager: InvRequestManager,
            targetSubscription: Subscription
        );
        public syncBlockchain(): Promise<void>;
        public requestMempool(): void;
        public getAccounts(blockHash: Hash, addresses: Address[]): Promise<Account[]>;
        public syncing: boolean;
        public static CHAINPROOF_REQUEST_TIMEOUT: 45000;
        public static CHAINPROOF_CHUNK_TIMEOUT: 10000;
        public static ACCOUNTSPROOF_REQUEST_TIMEOUT: 5000;
        public static MEMPOOL_DELAY_MIN: 2000;
        public static MEMPOOL_DELAY_MAX: 20000;
    }

    class NanoConsensus extends BaseConsensus {
        constructor(
            blockchain: NanoChain,
            mempool: NanoMempool,
            network: Network
        );
        public subscribeAccounts(addresses: Address[]): void;
        public addSubscriptions(newAddresses: Address[]|Address): void;
        public removeSubscriptions(addressesToRemove: Address[]|Address): void;
        public getAccount(address: Address, blockHash?: Hash): Promise<undefined|Account>;
        public getAccounts(addresses: Address[], blockHash?: Hash): Promise<Account[]>;
        public relayTransaction(transaction: Transaction): Promise<void>;
        public blockchain: NanoChain;
        public mempool: NanoMempool;
    }

    class NanoMempool extends Observable {
        constructor(blockchain: IBlockchain);
        public pushTransaction(transaction: Transaction): Promise<boolean>;
        public getTransaction(hash: Hash): undefined|Transaction;
        public getTransactions(maxCount?: number): Transaction[];
        public getPendingTransactions(address: Address): Transaction[];
        public changeHead(block: Block, transactions: Transaction[]): void;
        public removeTransaction(transaction: Transaction): void;
        public evictExceptAddresses(addresses: Address[]): void;
        public length: number;
    }

    class ConsensusDB /* extends JDB.JungleDB */ {
        public static getFull(dbPrefix?: string): Promise<ConsensusDB>;
        public static getLight(dbPrefix?: string): Promise<ConsensusDB>;
        constructor(dbPrefix: string, light?: boolean);
        public static VERSION: number;
        public static INITIAL_DB_SIZE: number;
        public static MIN_RESIZE: number;
    }

    // Not registered globally
    // class UpgradeHelper {
    //     public static recomputeTotals(jdb: ConsensusDB): Promise<void>;
    // }

    class Consensus {
        public static full(netconfig?: NetworkConfig): Promise<FullConsensus>;
        public static light(netconfig?: NetworkConfig): Promise<LightConsensus>;
        public static nano(netconfig?: NetworkConfig): Promise<NanoConsensus>;
        public static volatileFull(netconfig?: NetworkConfig): Promise<FullConsensus>;
        public static volatileLight(netconfig?: NetworkConfig): Promise<LightConsensus>;
        public static volatileNano(netconfig?: NetworkConfig): Promise<NanoConsensus>;
    }

    class Protocol {
        public static DUMB: 0;
        public static WSS: 1;
        public static RTC: 2;
        public static WS: 4;
    }

    class Message {
        constructor(type: Message.Type);
        public static peekType(buf: SerialBuffer): Message.Type;
        public static peekLength(buf: SerialBuffer): number;
        public static unserialize(buf: SerialBuffer): Message;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public type: Message.Type;
        public toString(): string;
        public static MAGIC: 0x42042042;
    }

    namespace Message {
        type Type = Type.VERSION|Type.INV|Type.GET_DATA|Type.GET_HEADER|Type.NOT_FOUND|Type.GET_BLOCKS|Type.BLOCK|Type.HEADER|Type.TX|Type.MEMPOOL|Type.REJECT|Type.SUBSCRIBE|Type.ADDR|Type.GET_ADDR|Type.PING|Type.PONG|Type.SIGNAL|Type.GET_CHAIN_PROOF|Type.CHAIN_PROOF|Type.GET_ACCOUNTS_PROOF|Type.ACCOUNTS_PROOF|Type.GET_ACCOUNTS_TREE_CHUNK|Type.ACCOUNTS_TREE_CHUNK|Type.GET_TRANSACTIONS_PROOF|Type.TRANSACTIONS_PROOF|Type.GET_TRANSACTION_RECEIPTS|Type.TRANSACTION_RECEIPTS|Type.GET_BLOCK_PROOF|Type.BLOCK_PROOF|Type.GET_HEAD|Type.HEAD|Type.VERACK;
        namespace Type {
            type VERSION =    0;
            type INV =        1;
            type GET_DATA =   2;
            type GET_HEADER = 3;
            type NOT_FOUND =  4;
            type GET_BLOCKS = 5;
            type BLOCK =      6;
            type HEADER =     7;
            type TX =         8;
            type MEMPOOL =    9;
            type REJECT =     10;
            type SUBSCRIBE =  11;

            type ADDR =       20;
            type GET_ADDR =   21;
            type PING =       22;
            type PONG =       23;

            type SIGNAL =     30;

            type GET_CHAIN_PROOF =            40;
            type CHAIN_PROOF =                41;
            type GET_ACCOUNTS_PROOF =         42;
            type ACCOUNTS_PROOF =             43;
            type GET_ACCOUNTS_TREE_CHUNK =    44;
            type ACCOUNTS_TREE_CHUNK =        45;
            type GET_TRANSACTIONS_PROOF =     47;
            type TRANSACTIONS_PROOF =         48;
            type GET_TRANSACTION_RECEIPTS =   49;
            type TRANSACTION_RECEIPTS =       50;
            type GET_BLOCK_PROOF =            51;
            type BLOCK_PROOF =                52;

            type GET_HEAD =   60;
            type HEAD =       61;

            type VERACK =   90;
        }
    }

    class AddrMessage extends Message {
        constructor(addresses: PeerAddress[]);
        public static unserialize(buf: SerialBuffer): AddrMessage;
        public addresses: PeerAddress[];
    }

    class BlockMessage extends Message {
        constructor(block: Block);
        public static unserialize(buf: SerialBuffer): BlockMessage;
        public block: Block;
    }

    class RawBlockMessage extends Message {
        constructor(block: Uint8Array);
        public static unserialize(buf: SerialBuffer): RawBlockMessage;
        public block: Block;
    }

    class GetAddrMessage extends Message {
        constructor(
            protocolMask: number,
            serviceMask: number,
            maxResults: number
        );
        public static unserialize(buf: SerialBuffer): GetAddrMessage;
        public protocolMask: number;
        public serviceMask: number;
        public maxResults: number;
    }

    class GetBlocksMessage extends Message {
        constructor(
            locators: Hash[],
            maxInvSize?: number,
            direction?: GetBlocksMessage.Direction
        );
        public static unserialize(buf: SerialBuffer): GetBlocksMessage;
        public locators: Hash[];
        public direction: GetBlocksMessage.Direction;
        public maxInvSize: number;
        public static LOCATORS_MAX_COUNT: 128;
    }

    namespace GetBlocksMessage {
        type Direction = Direction.FORWARD|Direction.BACKWARD;
        namespace Direction {
            type FORWARD = 0x1;
            type BACKWARD = 0x2;
        }
    }

    class HeaderMessage extends Message {
        constructor(header: BlockHeader);
        public static unserialize(buf: SerialBuffer): HeaderMessage;
        public header: BlockHeader;
    }

    class InvVector {
        public static fromBlock(block: Block): InvVector;
        public static fromHeader(header: BlockHeader): InvVector;
        public static fromTransaction(tx: Transaction): InvVector;
        constructor(type: InvVector.Type, hash: Hash);
        public static unserialize(buf: SerialBuffer): InvVector;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public equals(o: any): boolean;
        public hashCode(): string;
        public toString(): string;
        public serializedSize: number;
        public type: InvVector.Type;
        public hash: Hash;
    }

    namespace InvVector {
        type Type = Type.ERROR|Type.TRANSACTION|Type.BLOCK;
        namespace Type {
            type ERROR = 0;
            type TRANSACTION = 1;
            type BLOCK = 2;
            function unserialize(buf: SerialBuffer): InvVector.Type;
        }
    }

    class BaseInventoryMessage extends Message {
        constructor(type: Message.Type, vectors: InvVector[]);
        public vectors: InvVector[];
        public static VECTORS_MAX_COUNT: 1000;
    }

    class InvMessage extends BaseInventoryMessage {
        constructor(vectors: InvVector[]);
        public static unserialize(buf: SerialBuffer): InvMessage;
    }

    class GetDataMessage extends BaseInventoryMessage {
        constructor(vectors: InvVector[]);
        public static unserialize(buf: SerialBuffer): GetDataMessage;
    }

    class GetHeaderMessage extends BaseInventoryMessage {
        constructor(vectors: InvVector[]);
        public static unserialize(buf: SerialBuffer): GetHeaderMessage;
    }

    class NotFoundMessage extends BaseInventoryMessage {
        constructor(vectors: InvVector[]);
        public static unserialize(buf: SerialBuffer): NotFoundMessage;
    }

    class MempoolMessage extends Message {
        constructor();
        public static unserialize(buf: SerialBuffer): MempoolMessage;
    }

    class PingMessage extends Message {
        constructor(nonce: number);
        public static unserialize(buf: SerialBuffer): PingMessage;
        public nonce: number;
    }

    class PongMessage extends Message {
        constructor(nonce: number);
        public static unserialize(buf: SerialBuffer): PongMessage;
        public nonce: number;
    }

    class RejectMessage extends Message {
        constructor(
            messageType: Message.Type,
            code: RejectMessage.Code,
            reason: string,
            extraData?: Uint8Array
        );
        public static unserialize(buf: SerialBuffer): RejectMessage;
        public messageType: Message.Type;
        public code: RejectMessage.Code;
        public reason: string;
        public extraData: Uint8Array;
    }

    namespace RejectMessage {
        type Code = Code.REJECT_MALFORMED|Code.REJECT_INVALID|Code.REJECT_OBSOLETE|Code.REJECT_DOUBLE|Code.REJECT_DUST|Code.REJECT_INSUFFICIENT_FEE;
        namespace Code {
            type REJECT_MALFORMED = 0x01;
            type REJECT_INVALID = 0x10;
            type REJECT_OBSOLETE = 0x11;
            type REJECT_DOUBLE = 0x12;
            type REJECT_DUST = 0x41;
            type REJECT_INSUFFICIENT_FEE = 0x42;
        }
    }

    class SignalMessage extends Message {
        constructor(
            senderId: PeerId,
            recipientId: PeerId,
            nonce: number,
            ttl: number,
            flags?: SignalMessage.Flag|number,
            payload?: Uint8Array,
            senderPubKey?: PublicKey,
            signature?: Signature
        );
        public static unserialize(buf: SerialBuffer): SignalMessage;
        public verifySignature(): boolean;
        public senderId: PeerId;
        public recipientId: PeerId;
        public nonce: number;
        public ttl: number;
        public flags: SignalMessage.Flag|number;
        public payload: Uint8Array;
        public signature: Signature;
        public senderPubKey: PublicKey;
        public hasPayload(): boolean;
        public isUnroutable(): boolean;
        public isTtlExceeded(): boolean;
    }

    namespace SignalMessage {
        type Flag = Flag.UNROUTABLE|Flag.TTL_EXCEEDED;
        namespace Flag {
            type UNROUTABLE = 0x1;
            type TTL_EXCEEDED = 0x2;
        }
    }

    class SubscribeMessage extends Message {
        constructor(subscription: Subscription);
        public static unserialize(buf: SerialBuffer): SubscribeMessage;
        public subscription: Subscription;
    }

    class TxMessage extends Message {
        constructor(transaction: Transaction, accountsProof?: AccountsProof);
        public static unserialize(buf: SerialBuffer): TxMessage;
        public transaction: Transaction;
        public hasAccountsProof: boolean;
        public accountsProof: AccountsProof;
    }

    class VersionMessage extends Message {
        constructor(
            version: number,
            peerAddress: PeerAddress,
            genesisHash: Hash,
            headHash: Hash,
            challengeNonce: Uint8Array
        );
        public static unserialize(buf: SerialBuffer): VersionMessage;
        public version: number;
        public peerAddress: PeerAddress;
        public genesisHash: Hash;
        public headHadh: Hash;
        public challengeNonce: Uint8Array;
        public static CHALLENGE_SIZE: 32;
    }

    class VerAckMessage extends Message {
        constructor(publicKey: PublicKey, signature: Signature);
        public static unserialize(buf: SerialBuffer): VerAckMessage;
        public publicKey: PublicKey;
        public signature: Signature;
    }

    class AccountsProofMessage extends Message {
        constructor(blockHash: Hash, accountsProof?: AccountsProof);
        public static unserialize(buf: SerialBuffer): AccountsProofMessage;
        public hasProof(): boolean;
        public blockHash: Hash;
        public proof: AccountsProof;
    }

    class GetAccountsProofMessage extends Message {
        constructor(blockHash: Hash, addresses: Address[]);
        public static unserialize(buf: SerialBuffer): GetAccountsProofMessage;
        public addresses: Address[];
        public blockHash: Hash;
        public static ADDRESSES_MAX_COUNT: 256;
    }

    class ChainProofMessage extends Message {
        constructor(proof: ChainProof);
        public static unserialize(buf: SerialBuffer): ChainProofMessage;
        public proof: ChainProof;
    }

    class GetChainProofMessage extends Message {
        constructor();
        public static unserialize(buf: SerialBuffer): GetChainProofMessage;
    }

    class AccountsTreeChunkMessage extends Message {
        constructor(blockHash: Hash, accountsTreeChunk?: AccountsTreeChunk);
        public static unserialize(buf: SerialBuffer): AccountsTreeChunkMessage;
        public hasChunk(): boolean;
        public blockHash: Hash;
        public chunk: AccountsTreeChunk;
    }

    class GetAccountsTreeChunkMessage extends Message {
        constructor(blockHash: Hash, startPrefix: string);
        public static unserialize(buf: SerialBuffer): GetAccountsTreeChunkMessage;
        public blockHash: Hash;
        public startPrefix: string;
    }

    class TransactionsProofMessage extends Message {
        constructor(blockHash: Hash, proof?: TransactionsProof);
        public static unserialize(buf: SerialBuffer): TransactionsProofMessage;
        public hasProof(): boolean;
        public blockHash: Hash;
        public proof: TransactionsProof;
    }

    class GetTransactionsProofMessage extends Message {
        constructor(blockHash: Hash, addresses: Address[]);
        public static unserialize(buf: SerialBuffer): GetTransactionsProofMessage;
        public addresses: Address[];
        public blockHash: Hash;
        public static ADDRESSES_MAX_COUNT: 256;
    }

    class GetTransactionReceiptsMessage extends Message {
        constructor(address: Address, offset?: number);
        public static unserialize(buf: SerialBuffer): GetTransactionReceiptsMessage;
        public address: Address;
        public offset: number;
    }

    class TransactionReceiptsMessage extends Message {
        constructor(receipts?: TransactionReceipt[]);
        public static unserialize(buf: SerialBuffer): TransactionReceiptsMessage;
        public hasReceipts(): boolean;
        public receipts: TransactionReceipt[];
        public static RECEIPTS_MAX_COUNT: 500;
    }

    class GetBlockProofMessage extends Message {
        constructor(blockHashToProve: Hash, knownBlockHash: Hash);
        public static unserialize(buf: SerialBuffer): GetBlockProofMessage;
        public blockHashToProve: Hash;
        public knownBlockHash: Hash;
    }

    class BlockProofMessage extends Message {
        constructor(proof?: BlockChain);
        public static unserialize(buf: SerialBuffer): BlockProofMessage;
        public hasProof(): boolean;
        public proof: BlockChain;
    }

    class GetHeadMessage extends Message {
        constructor();
        public static unserialize(buf: SerialBuffer): GetHeadMessage;
    }

    class HeadMessage extends Message {
        constructor(header: BlockHeader);
        public static unserialize(buf: SerialBuffer): HeadMessage;
        public header: BlockHeader;
    }

    class MessageFactory {
        public static peekType(buf: SerialBuffer): Message.Type;
        public static parse(buf: SerialBuffer): Message;
        public static CLASSES: {key: Message.Type, value: Message};
    }

    class WebRtcConnector extends Observable {}

    class WebRtcDataChannel extends DataChannel {
        constructor(nativeChannel: any);
        public sendChunk(msg: any): void;
        public close(): void;
        public readyState: DataChannel.ReadyState;
    }

    class WebRtcUtils {}
    class WebSocketConnector extends Observable {}

    class WebSocketDataChannel extends DataChannel {
        constructor(ws: WebSocket);
        public close(): void;
        public sendChunk(msg: any): void;
        public readyState: DataChannel.ReadyState;
    }

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
