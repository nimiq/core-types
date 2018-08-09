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
        type ReadyState = {
            CONNECTING: 0;
            OPEN: 1;
            CLOSING: 2;
            CLOSED: 3;
            fromString(str: string): DataChannel.ReadyState;
        };
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
        type Operation = {
            CONSUME_PROOF: 0,
            CONSUME_INPUT: 1,
            HASH: 2
        };
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
        type Algorithm = {
            BLAKE2B: 1,
            ARGON2D: 2,
            SHA256: 3,
            SHA512: 4
        };
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
        type MnemonicType = {
            LEGACY: 0,
            BIP39: 1,
            UNKNOWN: 2
        };
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
        type Type = {
            BASIC: 0,
            VESTING: 1,
            HTLC: 2,
        };
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
        type ProofType = {
            REGULAR_TRANSFER: 1,
            EARLY_RESOLVE: 2,
            TIMEOUT_RESOLVE: 3
        };
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
        type Status = {
            ERR_HASH_MISMATCH: -3,
            ERR_INCORRECT_PROOF: -2,
            ERR_UNMERGEABLE: -1,
            OK_COMPLETE: 0,
            OK_UNFINISHED: 1
        };
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
        type Version = {
            V1: 1
        };
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
        public static fromMinFeePerByte(minFeeperByte: number): Subscription;
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
        type Type = {
            NONE: 0,
            ANY: 1,
            ADDRESSES: 2,
            MIN_FEE: 3
        };
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
        type Format = {
            BASIC: 0,
            EXTENDED: 1,
        };
        type Flag = {
            NONE: 1,
            CONTRACT_CREATION: 0b1,
        };
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
        public truncate(): Promise;
        public commit(): Promise<boolean>;
        public abort(): Promise;
        public tx: any;
        public static CURRENT_ID_KEY: number;
    }

    class TransactionStoreCodec {
        public encode(obj: any): any;
        public decode(obj: any, key: string): any;
        public valueEncoding: {encode: (val: any) => any, decode: (val: any) => any, buffer: boolean, type: string}|void;
    }

    class TransactionReceipt {
        constructor(transactionHash: Hash, blockHash: Hash, blockHeight: number);
        public static unserialize(buf: SerialBuffer): TransactionReceipt;
        public serialize(buf?: SerialBuffer): SerialBuffer;
        public serializedSize: number;
        public transactionHash: Hash;
        public blockHash: Hash;
        public blockHeight: number;
    }

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
