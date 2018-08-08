// Type definitions for ../core/src/main/platform/browser/Class.js
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace Log.prototype{
	// Log.prototype.setLoggable.!1
	interface SetLoggable1 {
				TRACE : number;
				VERBOSE : number;
				DEBUG : number;
				INFO : number;
				WARNING : number;
				ERROR : number;
				ASSERT : number;
				toStringTag : /* Log.Level.toStringTag */ any;
				toString : /* Log.Level.toString */ any;
				get : /* Log.Level.get */ any;
	}
}
declare namespace Log.prototype{
	// Log.prototype.msg.!2
	type Msg2 = Array<string>;
}
declare namespace Log.d{
	// Log.d.tag.!ret
	type TagRet = ((message : any, ...args : Hash) => void);
}
declare namespace Log.e{
	// Log.e.tag.!0
	interface Tag0 {
		prototype : {
						nonce : number;
						_signal : /*no type*/{};
			rtcConnection : {
								onicecandidate : /* PeerConnector.prototype.rtcConnection.onicecandidate */ any;
								onconnectionstatechange : /* PeerConnector.prototype.rtcConnection.onconnectionstatechange */ any;
								onicegatheringstatechange : /* PeerConnector.prototype.rtcConnection.onicegatheringstatechange */ any;
			}
						peerAddress : PeerAddress;
						onSignal : /* PeerConnector.prototype.onSignal */ any;
						_onConnectionStateChange : /* PeerConnector.prototype._onConnectionStateChange */ any;
						_onClose : /* PeerConnector.prototype._onClose */ any;
						_addIceCandidate : /* PeerConnector.prototype._addIceCandidate */ any;
						_handleCandidateQueue : /* PeerConnector.prototype._handleCandidateQueue */ any;
						_onIceCandidate : /* PeerConnector.prototype._onIceCandidate */ any;
						_onIceGatheringStateChange : /* PeerConnector.prototype._onIceGatheringStateChange */ any;
						_onDescription : /* PeerConnector.prototype._onDescription */ any;
						_onDataChannel : /* PeerConnector.prototype._onDataChannel */ any;
		}
	}
}
declare namespace Log.e{
	// Log.e.tag.!ret
	type TagRet = ((message : string | (() => string), ...args : any) => void);
}
declare namespace Log.i{
	// Log.i.tag.!ret
	type TagRet = ((message : string, ...args : any) => void);
}
declare namespace Log.v{
	// Log.v.tag.!ret
	type TagRet = ((message : any, ...args : any) => void);
}
declare namespace Log.w{
	// Log.w.tag.!ret
	type TagRet = ((message : string, ...args : string) => void);
}
declare namespace Log.t{
	// Log.t.tag.!ret
	type TagRet = ((message : any, ...args : any) => void);
}
declare namespace DataChannel.prototype{
	// DataChannel.prototype.isExpectingMessage.!0
	interface IsExpectingMessage0 {
				VERSION : number;
				INV : number;
				GET_DATA : number;
				GET_HEADER : number;
				NOT_FOUND : number;
				GET_BLOCKS : number;
				BLOCK : number;
				HEADER : number;
				TX : number;
				MEMPOOL : number;
				REJECT : number;
				SUBSCRIBE : number;
				ADDR : number;
				GET_ADDR : number;
				PING : number;
				PONG : number;
				SIGNAL : number;
				GET_CHAIN_PROOF : number;
				CHAIN_PROOF : number;
				GET_ACCOUNTS_PROOF : number;
				ACCOUNTS_PROOF : number;
				GET_ACCOUNTS_TREE_CHUNK : number;
				ACCOUNTS_TREE_CHUNK : number;
				GET_TRANSACTIONS_PROOF : number;
				TRANSACTIONS_PROOF : number;
				GET_TRANSACTION_RECEIPTS : number;
				TRANSACTION_RECEIPTS : number;
				GET_BLOCK_PROOF : number;
				BLOCK_PROOF : number;
				GET_HEAD : number;
				HEAD : number;
				VERACK : number;
	}
}
// ExpectedMessage.!0
type 0 = Array</* ExpectedMessage.!0 */ any>;
declare namespace WebSocketFactory{
	// WebSocketFactory.newWebSocket.!ret
	interface NewWebSocketRet {
				binaryType : string;
				onopen(): void;
				onerror : /* ArrayBuffer.onerror */ any;
				onmessage : /* ArrayBuffer.onmessage */ any;
				onclose : /* ArrayBuffer.onclose */ any;
	}
}
declare namespace Timers.prototype{
	// Timers.prototype.setTimeout.!1
	type SetTimeout1 = (() => any);
}
declare namespace Timers.prototype{
	// Timers.prototype.resetTimeout.!1
	type ResetTimeout1 = (() => any);
}
declare namespace Timers.prototype{
	// Timers.prototype.setInterval.!1
	type SetInterval1 = (() => void);
}
declare namespace IteratorUtils{
	// IteratorUtils.alternate.!0
	interface Alternate0 {
	}
}
declare namespace IteratorUtils{
	// IteratorUtils.alternate.!ret
	interface AlternateRet {
				next(): IteratorUtils.AlternateRet.NextRet;
		:Symbol : {
						iterator(): IteratorUtils.AlternateRet.:Symbol.IteratorRet;
		}
	}
}
declare namespace IteratorUtils.AlternateRet{
	// IteratorUtils.alternate.!ret.next.!ret
	interface NextRet {
				done : boolean;
	}
}
declare namespace IteratorUtils.AlternateRet.:Symbol{
	// IteratorUtils.alternate.!ret.:Symbol.iterator.!ret
	interface IteratorRet {
				next : /* IteratorUtils.alternate.!ret.next */ any;
	}
}
declare namespace ArrayUtils{
	// ArrayUtils.randomElement.!0
	interface RandomElement0 {
				 : Array</* ArrayUtils.randomElement.!ret */ any>;
	}
}
declare namespace ArrayUtils{
	// ArrayUtils.randomElement.!ret
	interface RandomElementRet {
				score : number;
				addressState : PeerAddressState;
	}
}
declare namespace ArrayUtils{
	// ArrayUtils.k_combinations.!0
	type K_combinations0 = Array<any>;
}
declare namespace ArrayUtils{
	// ArrayUtils.k_combinations.!ret
	type K_combinationsRet = Array<any>;
}
declare namespace HashMap.prototype{
	// HashMap.prototype.keys.!ret
	type KeysRet = Array<any>;
}
declare namespace HashMap.prototype{
	// HashMap.prototype.keyIterator.!ret
	interface KeyIteratorRet {
	}
}
declare namespace HashMap.prototype{
	// HashMap.prototype.values.!ret
	type ValuesRet = Array<any>;
}
declare namespace HashMap.prototype{
	// HashMap.prototype.valueIterator.!ret
	interface ValueIteratorRet {
	}
}
declare namespace HashSet.prototype{
	// HashSet.prototype.values.!ret
	type ValuesRet = Array<any>;
}
declare namespace LimitHashSet.prototype{
	// LimitHashSet.prototype.values.!ret
	type ValuesRet = Array<any>;
}
declare namespace LimitHashSet.prototype{
	// LimitHashSet.prototype.valueIterator.!ret
	interface ValueIteratorRet {
				next(): LimitHashSet.prototype.ValueIteratorRet.NextRet;
	}
}
declare namespace LimitHashSet.prototype.ValueIteratorRet{
	// LimitHashSet.prototype.valueIterator.!ret.next.!ret
	interface NextRet {
				done : boolean;
				value : ForwardedSignal;
	}
}
// LimitHashSet.!1
type 1 = ((o : any) => string);
declare namespace InclusionHashSet.prototype{
	// InclusionHashSet.prototype.values.!ret
	type ValuesRet = Array<string>;
}
declare namespace InclusionHashSet.prototype{
	// InclusionHashSet.prototype.valueIterator.!ret
	interface ValueIteratorRet {
	}
}
declare namespace LimitInclusionHashSet.prototype{
	// LimitInclusionHashSet.prototype.values.!ret
	type ValuesRet = Array<string>;
}
declare namespace LimitIterable.prototype.:Symbol{
	// LimitIterable.prototype.:Symbol.iterator.!ret
	interface IteratorRet {
				next : /*no type*/{};
	}
}
declare namespace LimitIterable.prototype.:Symbol.IteratorRet{
	// LimitIterable.prototype.:Symbol.iterator.!ret.next.!ret
	interface NextRet {
				done : boolean;
				value : Transaction;
	}
}
declare namespace LimitIterable{
	// LimitIterable.iterator.!0
	interface Iterator0 {
				next : /*no type*/{};
	}
}
declare namespace LimitIterable.Iterator0{
	// LimitIterable.iterator.!0.next.!ret
	interface NextRet {
				done : boolean;
				value : Transaction;
	}
}
declare namespace LimitIterable{
	// LimitIterable.iterator.!ret
	interface IteratorRet {
				next(): LimitIterable.IteratorRet.NextRet;
	}
}
declare namespace LimitIterable.IteratorRet{
	// LimitIterable.iterator.!ret.next.!ret
	interface NextRet {
				done : boolean;
				value : Transaction;
	}
}
// LimitIterable.!0
declare interface 0 {
		next(): LimitIterable0.NextRet;
}
declare namespace LimitIterable0{
	// LimitIterable.!0.next.!ret
	interface NextRet {
				done : boolean;
				value : Transaction;
	}
}
declare namespace LinkedList.prototype.:Symbol{
	// LinkedList.prototype.:Symbol.iterator.!ret
	interface IteratorRet {
				next(): LinkedList.prototype.:Symbol.IteratorRet.NextRet;
	}
}
declare namespace LinkedList.prototype.:Symbol.IteratorRet{
	// LinkedList.prototype.:Symbol.iterator.!ret.next.!ret
	interface NextRet {
				done : boolean;
				value : ForwardedSignal;
	}
}
declare namespace Queue.prototype{
	// Queue.prototype.enqueueAll.!0
	type EnqueueAll0 = Array<InvVector>;
}
declare namespace Queue.prototype{
	// Queue.prototype.dequeueMulti.!ret
	type DequeueMultiRet = Array<any>;
}
// Queue.!0
type 0 = ((o : any) => string);
declare namespace SortedList.prototype.:Symbol{
	// SortedList.prototype.:Symbol.iterator.!ret
	interface IteratorRet {
				:t : Transaction;
	}
}
declare namespace Synchronizer.prototype{
	// Synchronizer.prototype.push.!0
	type Push0 = (() => void);
}
declare namespace MultiSynchronizer.prototype{
	// MultiSynchronizer.prototype.push.!1
	type Push1 = (() => Promise);
}
declare namespace PrioritySynchronizer.prototype{
	// PrioritySynchronizer.prototype.push.!1
	type Push1 = (() => ChainProof);
}
declare namespace IWorker{
	// IWorker.createProxy.!2
	interface CreateProxy2 {
				onmessage(msg : any): void;
	}
}
declare namespace IWorker{
	// IWorker.Proxy.!ret
	interface ProxyRet extends CryptoWorker {
				new (worker : /* IWorker.createProxy.!2 */ any, name? : string): any;
				_receive(msg : any): void;
				_invoke(command : string, args? : /* [? */ any, /* string] */ any | Array<any>): any;
				destroy(): any;
				_name : string;
				_messageId : number;
	}
}
declare namespace IWorker.ProxyRet.prototype{
	// IWorker.Proxy.!ret.prototype._invoke.!1
	type _invoke1 = Array<any>;
}
declare namespace IWorker{
	// IWorker.Stub.!ret
	interface StubRet {
				new ();
				_result : /* CryptoWorkerImpl.prototype.!proto._result */ any;
				_onmessage : /* CryptoWorkerImpl.prototype.!proto._onmessage */ any;
				init : /* MinerWorkerImpl._superInit */ any;
				_invoke : /* CryptoWorkerImpl.prototype.!proto._invoke */ any;
				destroy : /* CryptoWorkerImpl.prototype.!proto.destroy */ any;
	}
}
declare namespace IWorker{
	// IWorker.Pool.!ret
	interface PoolRet {
				new (proxyInitializer : () => void, name? : string, size? : number);
				poolSize : number;
				start : /* MinerWorkerPool.prototype.!proto.start */ any;
				destroy : /* MinerWorkerPool.prototype.!proto.destroy */ any;
				_invoke : /* MinerWorkerPool.prototype.!proto._invoke */ any;
				_step : /* MinerWorkerPool.prototype.!proto._step */ any;
				_updateToSize : /* MinerWorkerPool._superUpdateToSize */ any;
				_name : string;
				_poolSize : number;
				_workers : Array<any>;
				_freeWorkers : Array<any>;
		_waitingCalls : {
		}
	}
}
declare namespace CryptoWorker.prototype{
	// CryptoWorker.prototype.computeArgon2dBatch.!0
	type ComputeArgon2dBatch0 = Array<Float32Array>;
}
declare namespace CryptoWorker.prototype{
	// CryptoWorker.prototype.blockVerify.!1
	type BlockVerify1 = Array<boolean>;
}
declare namespace CryptoWorkerImpl{
	// CryptoWorkerImpl.prototype.!proto
	interface PrototypeProto extends CryptoWorker {
				_result(msg : any, status : string, result : any): void;
				_onmessage(msg : any): void;
				_invoke(command : any, args : any): void;
				destroy(): void;
				init : /* MinerWorkerImpl._superInit */ any;
	}
}
declare namespace CryptoWorkerImpl.prototype{
	// CryptoWorkerImpl.prototype.computeArgon2dBatch.!0
	type ComputeArgon2dBatch0 = Array<Float32Array>;
}
declare namespace CryptoWorkerImpl.prototype{
	// CryptoWorkerImpl.prototype.computeArgon2dBatch.!ret
	type ComputeArgon2dBatchRet = Array<Float32Array>;
}
declare namespace CryptoWorkerImpl.prototype{
	// CryptoWorkerImpl.prototype.blockVerify.!1
	type BlockVerify1 = Array<boolean>;
}
declare namespace CryptoWorkerImpl.prototype{
	// CryptoWorkerImpl.prototype.blockVerify.!ret
	interface BlockVerifyRet {
	}
}
declare namespace MerklePath{
	// MerklePath.compute.!0
	type Compute0 = Array<Address>;
}
declare namespace MerklePath{
	// MerklePath._compute.!2
	type _compute2 = Array<MerklePathNode>;
}
declare namespace MerklePath{
	// MerklePath._compute.!ret
	interface _computeRet {
				containsLeaf : boolean;
	}
}
declare namespace MerklePath{
	// MerklePath._compress.!0
	type _compress0 = Array<MerklePathNode>;
}
declare namespace MerkleProof{
	// MerkleProof.compute.!0
	type Compute0 = Array<any>;
}
declare namespace MerkleProof{
	// MerkleProof.compute.!1
	type Compute1 = Array<any>;
}
declare namespace MerkleProof{
	// MerkleProof.computeWithAbsence.!0
	type ComputeWithAbsence0 = Array<any>;
}
declare namespace MerkleProof{
	// MerkleProof._compute.!0
	type _compute0 = Array<any>;
}
declare namespace MerkleProof{
	// MerkleProof._compute.!1
	type _compute1 = Array<any>;
}
declare namespace MerkleProof{
	// MerkleProof._compute.!ret
	interface _computeRet {
				containsLeaf : boolean;
				operations : Array<number>;
				path : Array<any>;
	}
}
declare namespace MerkleProof{
	// MerkleProof._compress.!0
	interface _compress0 {
				 : Array</* MerkleProof.Operation */ any>;
	}
}
declare namespace MnemonicUtils{
	// MnemonicUtils._bitsToMnemonic.!1
	type _bitsToMnemonic1 = Array<string>;
}
declare namespace MnemonicUtils{
	// MnemonicUtils._bitsToMnemonic.!ret
	type _bitsToMnemonicRet = Array<string>;
}
declare namespace MnemonicUtils{
	// MnemonicUtils._mnemonicToBits.!1
	type _mnemonicToBits1 = Array<string>;
}
declare namespace MnemonicUtils{
	// MnemonicUtils.entropyToMnemonic.!ret
	type EntropyToMnemonicRet = Array<string>;
}
declare namespace MnemonicUtils{
	// MnemonicUtils.entropyToLegacyMnemonic.!1
	type EntropyToLegacyMnemonic1 = Array<string>;
}
declare namespace MnemonicUtils{
	// MnemonicUtils.entropyToLegacyMnemonic.!ret
	type EntropyToLegacyMnemonicRet = Array<string>;
}
declare namespace MnemonicUtils{
	// MnemonicUtils.mnemonicToEntropy.!1
	type MnemonicToEntropy1 = Array<string>;
}
declare namespace MnemonicUtils{
	// MnemonicUtils.legacyMnemonicToEntropy.!1
	type LegacyMnemonicToEntropy1 = Array<string>;
}
declare namespace PublicKey{
	// PublicKey.sum.!0
	type Sum0 = Array<PublicKey>;
}
declare namespace PublicKey{
	// PublicKey._delinearizeAndAggregatePublicKeys.!0
	type _delinearizeAndAggregatePublicKeys0 = Array<PublicKey>;
}
declare namespace PublicKey{
	// PublicKey._publicKeysHash.!0
	type _publicKeysHash0 = Array<Float32Array>;
}
declare namespace PublicKey{
	// PublicKey._publicKeysDelinearizeAndAggregate.!0
	type _publicKeysDelinearizeAndAggregate0 = Array<Float32Array>;
}
declare namespace Entropy.prototype{
	// Entropy.prototype.toExtendedPrivateKey.!1
	type ToExtendedPrivateKey1 = Array<string>;
}
declare namespace Entropy.prototype{
	// Entropy.prototype.toMnemonic.!ret
	type ToMnemonicRet = Array<string>;
}
declare namespace Signature{
	// Signature.fromPartialSignatures.!1
	type FromPartialSignatures1 = Array<PartialSignature>;
}
declare namespace Signature{
	// Signature._combinePartialSignatures.!1
	type _combinePartialSignatures1 = Array<Float32Array>;
}
declare namespace Signature{
	// Signature._aggregatePartialSignatures.!0
	type _aggregatePartialSignatures0 = Array<Float32Array>;
}
declare namespace Commitment{
	// Commitment.sum.!0
	type Sum0 = Array<Commitment>;
}
declare namespace Commitment{
	// Commitment._commitmentsAggregate.!0
	type _commitmentsAggregate0 = Array<Float32Array>;
}
declare namespace CommitmentPair{
	// CommitmentPair._commitmentCreate.!ret
	interface _commitmentCreateRet {
				commitment : Float32Array;
				secret : Float32Array;
	}
}
declare namespace PartialSignature{
	// PartialSignature.create.!2
	type Create2 = Array<PublicKey>;
}
declare namespace PartialSignature{
	// PartialSignature._delinearizedPartialSignatureCreate.!0
	type _delinearizedPartialSignatureCreate0 = /* [+Float32Array */ any | SerialBuffer];
}
declare namespace AccountsTreeNode.prototype{
	// AccountsTreeNode.prototype.getChildren.!ret
	type GetChildrenRet = Array<string>;
}
declare namespace AccountsTreeNode{
	// AccountsTreeNode.branchNode.!1
	type BranchNode1 = Array<string>;
}
declare namespace AccountsTreeNode{
	// AccountsTreeNode.branchNode.!2
	type BranchNode2 = Array<Hash>;
}
declare namespace SynchronousAccountsTreeStore.prototype{
	// SynchronousAccountsTreeStore.prototype.preload.!0
	type Preload0 = Array<string>;
}
declare namespace AccountsTree.prototype{
	// AccountsTree.prototype._insert.!3
	type _insert3 = Array<AccountsTreeNode>;
}
declare namespace AccountsTree.prototype{
	// AccountsTree.prototype._prune.!1
	type _prune1 = Array<AccountsTreeNode>;
}
declare namespace AccountsTree.prototype{
	// AccountsTree.prototype._updateKeys.!2
	type _updateKeys2 = Array<AccountsTreeNode>;
}
declare namespace AccountsTree.prototype{
	// AccountsTree.prototype.getAccountsProof.!0
	type GetAccountsProof0 = Array<Address>;
}
declare namespace AccountsTree.prototype{
	// AccountsTree.prototype._getAccountsProof.!1
	type _getAccountsProof1 = Array<string>;
}
declare namespace AccountsTree.prototype{
	// AccountsTree.prototype._getAccountsProof.!2
	type _getAccountsProof2 = Array<AccountsTreeNode>;
}
declare namespace SynchronousAccountsTree.prototype{
	// SynchronousAccountsTree.prototype.preloadAddresses.!0
	type PreloadAddresses0 = Array<Address>;
}
declare namespace SynchronousAccountsTree.prototype{
	// SynchronousAccountsTree.prototype._preloadAddresses.!1
	type _preloadAddresses1 = Array<string>;
}
declare namespace SynchronousAccountsTree.prototype{
	// SynchronousAccountsTree.prototype._insertBatch.!3
	type _insertBatch3 = Array<AccountsTreeNode>;
}
declare namespace SynchronousAccountsTree.prototype{
	// SynchronousAccountsTree.prototype._pruneBatch.!1
	type _pruneBatch1 = Array<AccountsTreeNode>;
}
declare namespace SynchronousAccountsTree.prototype{
	// SynchronousAccountsTree.prototype._updateKeysBatch.!1
	type _updateKeysBatch1 = Array<AccountsTreeNode>;
}
declare namespace PartialAccountsTree.prototype{
	// PartialAccountsTree.prototype._putLight.!0
	type _putLight0 = Array<AccountsTreeNode>;
}
declare namespace Accounts.prototype{
	// Accounts.prototype.getAccountsProof.!0
	type GetAccountsProof0 = Array<Address>;
}
declare namespace Accounts.prototype{
	// Accounts.prototype.gatherToBePrunedAccounts.!0
	type GatherToBePrunedAccounts0 = Array<Transaction>;
}
declare namespace BlockInterlink{
	// BlockInterlink._compress.!ret
	interface _compressRet {
				compressed : Array<Hash>;
				repeatBits : Float32Array;
	}
}
declare namespace BlockBody.prototype{
	// BlockBody.prototype.getMerkleLeafs.!ret
	type GetMerkleLeafsRet = /* [+Address,+Float32Array */ any | SerialBuffer,?,?];
}
declare namespace BlockBody.prototype{
	// BlockBody.prototype.getAddresses.!ret
	type GetAddressesRet = Array<Address>;
}
declare namespace Subscription{
	// Subscription.fromAddresses.!0
	type FromAddresses0 = Array<Address>;
}
declare namespace Transaction.prototype{
	// Transaction.prototype.hasFlag.!0
	interface HasFlag0 {
				NONE : number;
				CONTRACT_CREATION : number;
				ALL : number;
	}
}
declare namespace SignatureProof{
	// SignatureProof.multiSig.!1
	type MultiSig1 = Array<PublicKey>;
}
declare namespace TransactionCache.prototype{
	// TransactionCache.prototype.prependBlocks.!0
	type PrependBlocks0 = Array</* ?,+Block */ any>;
}
declare namespace TransactionStoreEntry.prototype{
	// TransactionStoreEntry.prototype.toJSON.!ret
	interface ToJSONRet {
				blockHeight : number;
				blockHash : string;
				index : number;
				transactionHashBuffer : Float32Array;
				senderBuffer : Float32Array;
				recipientBuffer : Float32Array;
	}
}
declare namespace TransactionStoreEntry{
	// TransactionStoreEntry.fromBlock.!ret
	type FromBlockRet = Array<TransactionStoreEntry>;
}
declare namespace TransactionStoreEntry{
	// TransactionStoreEntry.fromJSON.!1
	interface FromJSON1 {
				blockHeight : number;
				blockHash : string;
				index : number;
				transactionHashBuffer : Float32Array;
				senderBuffer : Float32Array;
				recipientBuffer : Float32Array;
	}
}
declare namespace TransactionStore.prototype{
	// TransactionStore.prototype.getBySender.!ret
	type GetBySenderRet = Array<any>;
}
declare namespace TransactionStore.prototype{
	// TransactionStore.prototype.getByRecipient.!ret
	type GetByRecipientRet = Array<any>;
}
declare namespace BaseChain.prototype{
	// BaseChain.prototype.getSuccessorBlocks.!ret
	type GetSuccessorBlocksRet = Array<any>;
}
declare namespace BaseChain.prototype{
	// BaseChain.prototype.getBlockLocators.!ret
	interface GetBlockLocatorsRet {
				 : Array<Hash>;
	}
}
declare namespace BaseChain{
	// BaseChain._isGoodSuperChain.!0
	type _isGoodSuperChain0 = Array<any>;
}
declare namespace BaseChain{
	// BaseChain._hasSuperQuality.!0
	type _hasSuperQuality0 = Array</* BaseChain._hasSuperQuality._hasSuperQuality0I */ any>;
}
declare namespace BaseChain._hasSuperQuality{
	// BaseChain._hasSuperQuality.!0.<i>
	interface _hasSuperQuality0I {
				head : Block;
	}
}
declare namespace BaseChain{
	// BaseChain._hasMultiLevelQuality.!0
	type _hasMultiLevelQuality0 = Array<any>;
}
declare namespace BaseChain{
	// BaseChain.manyPow.!0
	type ManyPow0 = Array<BlockHeader>;
}
declare namespace BlockChain.prototype{
	// BlockChain.prototype.denseSuffix.!ret
	type DenseSuffixRet = Array<Block>;
}
declare namespace ChainData.prototype{
	// ChainData.prototype.toObj.!ret
	interface ToObjRet {
				_totalDifficulty : string;
				_totalWork : string;
				_superBlockCounts : Array<number>;
				_onMainChain : boolean;
				_height : number;
				_head : SerialBuffer;
				_mainChainSuccessor : SerialBuffer;
				_pow : SerialBuffer;
	}
}
declare namespace ChainData{
	// ChainData.fromObj.!0
	interface FromObj0 {
				_totalDifficulty : string;
				_totalWork : string;
				_onMainChain : boolean;
				_height : number;
				_head : Float32Array;
				_mainChainSuccessor : Float32Array;
				_pow : Float32Array;
				_superBlockCounts : /* SuperBlockCounts._arr */ any;
	}
}
declare namespace ChainDataStore.prototype{
	// ChainDataStore.prototype.getChainDataCandidatesAt.!ret
	interface GetChainDataCandidatesAtRet {
				 : Array<ChainData>;
	}
}
declare namespace ChainDataStore.prototype{
	// ChainDataStore.prototype.getBlocksForward.!ret
	type GetBlocksForwardRet = Array<Block>;
}
declare namespace ChainDataStore.prototype{
	// ChainDataStore.prototype.getBlocksBackward.!ret
	type GetBlocksBackwardRet = Array<Block>;
}
declare namespace Mempool.prototype{
	// Mempool.prototype.getPendingTransactions.!ret
	type GetPendingTransactionsRet = Array<Transaction>;
}
declare namespace Mempool.prototype{
	// Mempool.prototype.getTransactionsBySender.!ret
	type GetTransactionsBySenderRet = Array<Transaction>;
}
declare namespace Mempool.prototype{
	// Mempool.prototype.getTransactionsByRecipient.!ret
	type GetTransactionsByRecipientRet = Array<Transaction>;
}
declare namespace Mempool.prototype{
	// Mempool.prototype.getTransactionsByAddresses.!0
	type GetTransactionsByAddresses0 = Array<Address>;
}
declare namespace Mempool.prototype{
	// Mempool.prototype.getTransactionsByAddresses.!ret
	type GetTransactionsByAddressesRet = Array<Transaction>;
}
declare namespace BaseConsensusAgent.prototype{
	// BaseConsensusAgent.prototype.getTransactionsProof.!1
	type GetTransactionsProof1 = Array<Address>;
}
declare namespace BaseConsensus.prototype{
	// BaseConsensus.prototype._requestTransactionsProof.!0
	type _requestTransactionsProof0 = Array<Address>;
}
declare namespace BaseConsensus.prototype{
	// BaseConsensus.prototype._requestTransactionsProof.!ret
	type _requestTransactionsProofRet = Array<any>;
}
declare namespace FullChain.prototype{
	// FullChain.prototype.getAccountsProof.!1
	type GetAccountsProof1 = Array<Address>;
}
declare namespace FullChain.prototype{
	// FullChain.prototype.getTransactionsProof.!1
	type GetTransactionsProof1 = Array<Address>;
}
declare namespace FullChain.prototype{
	// FullChain.prototype.getTransactionReceiptsByAddress.!ret
	type GetTransactionReceiptsByAddressRet = Array<TransactionReceipt>;
}
declare namespace PartialLightChain.prototype{
	// PartialLightChain.prototype._acceptProof.!1
	type _acceptProof1 = Array<Block>;
}
declare namespace PartialLightChain.prototype{
	// PartialLightChain.prototype.getBlockLocators.!ret
	type GetBlockLocatorsRet = Array<Hash>;
}
declare namespace NanoChain.prototype{
	// NanoChain.prototype._acceptProof.!1
	type _acceptProof1 = Array<Block>;
}
declare namespace NanoConsensusAgent.prototype{
	// NanoConsensusAgent.prototype._doRequestData.!0
	type _doRequestData0 = Array<any>;
}
declare namespace NanoConsensusAgent.prototype{
	// NanoConsensusAgent.prototype.getAccounts.!1
	type GetAccounts1 = Array<Address>;
}
declare namespace NanoConsensus.prototype{
	// NanoConsensus.prototype.getAccounts.!0
	type GetAccounts0 = Array<Address>;
}
declare namespace NanoMempool.prototype{
	// NanoMempool.prototype.getTransactions.!ret
	type GetTransactionsRet = Array<Transaction>;
}
declare namespace NanoMempool.prototype{
	// NanoMempool.prototype.getPendingTransactions.!ret
	type GetPendingTransactionsRet = Array<Transaction>;
}
declare namespace NanoMempool.prototype{
	// NanoMempool.prototype.changeHead.!1
	type ChangeHead1 = Array<Transaction>;
}
declare namespace NanoMempool.prototype{
	// NanoMempool.prototype.evictExceptAddresses.!0
	type EvictExceptAddresses0 = Array<Address>;
}
declare namespace NanoMempool.prototype{
	// NanoMempool.prototype._evictTransactions.!1
	type _evictTransactions1 = Array<Transaction>;
}
declare namespace Consensus{
	// Consensus.full.!0
	interface Full0 {
				services : Services;
	}
}
// InvMessage.!0
type 0 = Array<InvVector>;
// GetDataMessage.!0
type 0 = Array<InvVector>;
// NotFoundMessage.!0
type 0 = Array<InvVector>;
declare namespace PeerConnector.prototype{
	// PeerConnector.prototype._signal.!0
	interface _signal0 {
				otherCandidates : Array<any>;
	}
}
// WebRtcDataChannel.!0
declare interface 0 {
		onmessage(msg : any): void;
		onclose(): void;
		onerror(e : any): any;
}
declare namespace SeedList{
	// SeedList._serializeSeeds.!0
	type _serializeSeeds0 = Array<PeerAddress>;
}
declare namespace PeerAddressBook.prototype{
	// PeerAddressBook.prototype.query.!ret
	type QueryRet = Array<PeerAddress>;
}
declare namespace ConnectionPool.prototype{
	// ConnectionPool.prototype.values.!ret
	type ValuesRet = Array<PeerConnection>;
}
declare namespace ConnectionPool.prototype{
	// ConnectionPool.prototype.getConnectionsByNetAddress.!ret
	type GetConnectionsByNetAddressRet = Array<PeerConnection>;
}
declare namespace ConnectionPool.prototype{
	// ConnectionPool.prototype.getConnectionsBySubnet.!ret
	type GetConnectionsBySubnetRet = Array<PeerConnection>;
}
declare namespace ConnectionPool.prototype{
	// ConnectionPool.prototype.getOutboundConnectionsBySubnet.!ret
	type GetOutboundConnectionsBySubnetRet = Array<PeerConnection>;
}
// WsNetworkConfig.!2
declare interface 2 {
		enabled : boolean;
		port : number;
		address : string;
		header : string;
}
declare namespace RtcNetworkConfig.prototype.rtcConfig.iceServers.0{
	// RtcNetworkConfig.prototype.rtcConfig.iceServers.0
	interface 0 {
				urls : string;
	}
}
declare namespace RtcNetworkConfig.prototype.rtcConfig.iceServers.1{
	// RtcNetworkConfig.prototype.rtcConfig.iceServers.1
	interface 1 {
				urls : string;
	}
}
declare namespace NetUtils{
	// NetUtils._extendIPv6.!0
	type _extendIPv60 = Array<string>;
}
declare namespace Miner.prototype{
	// Miner.prototype._onWorkerShare.!0
	interface _onWorkerShare0 {
				nonce : number;
				hash : Hash;
				block : Block;
	}
}
declare namespace BasePoolMiner.prototype{
	// BasePoolMiner.prototype._send.!0
	interface _send0 {
				message : string;
				block : string;
	}
}
declare namespace MultiSigWallet.prototype{
	// MultiSigWallet.prototype.completeTransaction.!3
	type CompleteTransaction3 = Array<PartialSignature>;
}
declare namespace MultiSigWallet{
	// MultiSigWallet.fromPublicKeys.!2
	type FromPublicKeys2 = Array<PublicKey>;
}
declare namespace WalletStore.prototype{
	// WalletStore.prototype.list.!ret
	type ListRet = Array<Address>;
}
declare namespace WalletStore.prototype{
	// WalletStore.prototype.listMultiSig.!ret
	type ListMultiSigRet = Array<Address>;
}
declare namespace MinerWorkerPool{
	// MinerWorkerPool.prototype.!proto
	interface PrototypeProto extends CryptoWorker {
				start(): /* !this */ any;
				poolSize : number;
				destroy(): IWorker.Pool.!ret;
				_invoke(name : string, args : Array<any>): any;
				_step(worker : any): void;
				_updateToSize : /* MinerWorkerPool._superUpdateToSize */ any;
	}
}
declare namespace MinerWorkerPool.prototype{
	// MinerWorkerPool.prototype._singleMiner.!0
	interface _singleMiner0 {
				minNonce : number;
				maxNonce : number;
	}
}
declare namespace MinerWorkerPool{
	// MinerWorkerPool._activeNonces.<i>
	interface _activeNoncesI {
				minNonce : number;
				maxNonce : number;
	}
}
declare namespace MinerWorkerPool{
	// MinerWorkerPool._waitingCalls.<i>
	interface _waitingCallsI {
				name : string;
				args : Array<any>;
				resolve(value : any): void;
				error : /* Promise.reject */ any;
	}
}
declare namespace TransactionCache{
	// TransactionCache._blockOrder.<i>
	interface _blockOrderI {
	}
}
declare namespace Log.e.Tag0.prototype{
	// Log.e.tag.!0.prototype._signal.!0
	interface _signal0 {
		otherCandidates : {
		}
	}
}
declare namespace IBlockchain{
	// IBlockchain.prototype.!proto
	interface PrototypeProto {
				_offAll : /* Observable.prototype._offAll */ any;
				on : /* Observable.prototype.on */ any;
				off : /* Observable.prototype.off */ any;
				fire : /* Observable.prototype.fire */ any;
				bubble : /* Observable.prototype.bubble */ any;
	}
}
declare namespace DataChannel.prototype{
	// DataChannel.prototype.expectMessage.!0
	interface ExpectMessage0 {
	}
}
declare namespace InclusionHashSet.prototype{
	// InclusionHashSet.prototype.addAll.!0
	interface AddAll0 {
	}
}
declare namespace LinkedList.prototype{
	// LinkedList.prototype._push.!0
	interface _push0 {
				next : /* BasicAccount.prev */ any;
		prev : {
						next : /* LinkedList._head */ any;
						prev : /* LinkedList._head */ any;
		}
				value : ForwardedSignal;
	}
}
declare namespace LinkedList.prototype{
	// LinkedList.prototype._unshift.!0
	interface _unshift0 {
				next : /* LinkedList._head */ any;
				prev : /* LinkedList._head */ any;
	}
}
declare namespace SortedList.prototype{
	// SortedList.prototype.values.!ret
	interface ValuesRet {
	}
}
// SortedList.!0
declare interface 0 {
}
declare namespace IWorker.ProxyRet{
	// IWorker.Proxy.!ret.prototype.!proto
	interface PrototypeProto {
				computeArgon2d : /* CryptoWorker.prototype.computeArgon2d */ any;
				computeArgon2dBatch : /* CryptoWorker.prototype.computeArgon2dBatch */ any;
				kdf : /* CryptoWorker.prototype.kdf */ any;
				blockVerify : /* CryptoWorker.prototype.blockVerify */ any;
	}
}
declare namespace MerkleTree{
	// MerkleTree.computeRoot.!0
	interface ComputeRoot0 {
	}
}
// MerklePath.!0
declare interface 0 {
}
declare namespace MerkleProof.prototype{
	// MerkleProof.prototype.computeRoot.!0
	interface ComputeRoot0 {
	}
}
// MerkleProof.!1
declare interface 1 {
}
// AccountsTreeNode.!3
declare interface 3 {
}
// AccountsTreeChunk.!0
declare interface 0 {
}
// BlockInterlink.!3
declare interface 3 {
}
// BlockBody.!3
declare interface 3 {
}
// TransactionsProof.!0
declare interface 0 {
}
declare namespace BaseConsensusAgent.prototype{
	// BaseConsensusAgent.prototype._getTransactionsProof.!1
	interface _getTransactionsProof1 {
	}
}
declare namespace NanoConsensusAgent.prototype{
	// NanoConsensusAgent.prototype._getAccounts.!1
	interface _getAccounts1 {
	}
}
declare namespace WebRtcFactory{
	// WebRtcFactory.newPeerConnection.!ret
	interface NewPeerConnectionRet {
				onicecandidate : /* PeerConnector.prototype.rtcConnection.onicecandidate */ any;
				onconnectionstatechange : /* PeerConnector.prototype.rtcConnection.onconnectionstatechange */ any;
				onicegatheringstatechange : /* PeerConnector.prototype.rtcConnection.onicegatheringstatechange */ any;
	}
}
declare namespace WebSocketConnector.prototype{
	// WebSocketConnector.prototype.abort.!0
	interface Abort0 {
				netAddress : NetAddress;
	}
}
// SeedList.!0
declare interface 0 {
}
// MultiSigWallet.!2
declare interface 2 {
}
declare namespace IWorker{
	// IWorker.prepareForWorkerUse.!0
	interface PrepareForWorkerUse0 {
		prototype : {
						multiMine : /* MinerWorker.prototype.multiMine */ any;
		}
	}
}
// TransactionCache.!1
declare interface 1 {
}
declare interface IBlockchain extends Observable {
		new ();
	head : {
				onmessage : /* ArrayBuffer.onmessage */ any;
				onclose : /* ArrayBuffer.onclose */ any;
				onerror : /* ArrayBuffer.onerror */ any;
				netAddress : NetAddress;
	}
		height : number;
}
declare interface Class {
		new (): Class;
}

declare namespace Class{
		function register(cls : any): void;
}
declare interface Log {
		new (native : LogNative);
		setLoggable(tag : string, level : Log.prototype.SetLoggable1): void;
	level : {
				TRACE : number;
				VERBOSE : number;
				DEBUG : number;
				INFO : number;
				WARNING : number;
				ERROR : number;
				ASSERT : number;
				toStringTag : /* Log.Level.toStringTag */ any;
				toString : /* Log.Level.toString */ any;
				get : /* Log.Level.get */ any;
	}
		msg(level : /* Log.Level */ any, tag : string | {}, args : Log.prototype.Msg2): void;
		instance : Log;
		d(tag? : any, message : any, ...args : Hash): void;
		e(tag? : any, message : string | (() => string), ...args : any): void;
		i(tag? : any, message : string, ...args : any): void;
		v(tag? : any, message : any, ...args : any): void;
		w(tag? : any, message : string, ...args : string): void;
		t(tag? : string | {}, message : any, ...args : any): void;
	Level : {
				TRACE : number;
				VERBOSE : number;
				DEBUG : number;
				INFO : number;
				WARNING : number;
				ERROR : number;
				ASSERT : number;
				toStringTag(level : /* Log.Level */ any): string;
				toString(level : any): string;
				get(v : any): any;
	}
		TRACE : number;
		VERBOSE : number;
		DEBUG : number;
		INFO : number;
		WARNING : number;
		ERROR : number;
		ASSERT : number;
		_native : LogNative;
}
declare interface Observable {
		new ();
		_offAll(): void;
		on(type : string, callback : any): number;
		off(type : string, id : number): void;
		fire(type : string, ...args : any): any;
		bubble(observable : any, ...types : string): void;
		WILDCARD : string;
}
declare interface DataChannel extends Observable {
		new ();
		isExpectingMessage(type : DataChannel.prototype.IsExpectingMessage0): boolean;
		confirmExpectedMessage(type : number | /* Message.Type */ any, success : boolean): void;
		expectMessage(types : DataChannel.prototype.ExpectMessage0, timeoutCallback : any, msgTimeout? : number, chunkTimeout? : number): void;
		close(): void;
		_onClose(): void;
		_error(msg : string): void;
		_onMessage(msg : ArrayBuffer): void;
		_onTimeout(expectedMsg? : Array<any> | {}): void;
		send(msg : Float32Array): void;
		_sendChunked(msg : Float32Array, tag : number): void;
		sendChunk(msg : Float32Array): void;
	readyState : {
				CONNECTING : number;
				OPEN : number;
				CLOSING : number;
				CLOSED : number;
				fromString : /* DataChannel.ReadyState.fromString */ any;
	}
		lastMessageReceivedAt : number;
		_receivingTag : number;
		_lastChunkReceivedAt : number;
		netAddress : NetAddress;
		onmessage : /* ArrayBuffer.onmessage */ any;
		onclose : /* ArrayBuffer.onclose */ any;
		onerror : /* ArrayBuffer.onerror */ any;
		_buffer : SerialBuffer;
		CHUNK_SIZE_MAX : number;
		MESSAGE_SIZE_MAX : number;
		CHUNK_TIMEOUT : number;
		MESSAGE_TIMEOUT : number;
	ReadyState : {
				CONNECTING : number;
				OPEN : number;
				CLOSING : number;
				CLOSED : number;
				fromString(str : string): number;		fromString();
	}
		_msgType : number;
		_sendingTag : number;
}
declare interface ExpectedMessage {
		new (types : 0, timeoutCallback : any, msgTimeout : number, chunkTimeout : number): ExpectedMessage;
}

declare interface CryptoLib {
		new (): CryptoLib;
}

declare namespace CryptoLib{
		export var instance : /*no type*/{};
}
declare interface WebRtcFactory {
		new (): WebRtcFactory;
}

declare namespace WebRtcFactory{
		function newPeerConnection(configuration : any): WebRtcFactory.NewPeerConnectionRet;
		function newSessionDescription(rtcSessionDescriptionInit : any): any;
		function newIceCandidate(rtcIceCandidateInit : any): any;
}
declare interface WebSocketFactory {
		new (): WebSocketFactory;
}

declare namespace WebSocketFactory{
		function newWebSocketServer(): Observable;
		function newWebSocket(url : string): WebSocketFactory.NewWebSocketRet;
}
declare interface DnsUtils {
		new (): DnsUtils;
}

declare namespace DnsUtils{
		function lookup(host : string): /* DnsUtils.+Promise */ any;
}
declare interface HttpRequest {
		new (): HttpRequest;
}

declare namespace HttpRequest{
		function get(url : string, timeout? : number, maxResponseSize? : number): /* HttpRequest.+Promise */ any;
}
declare interface ConstantHelper {
		new ();
		isConstant(constant : string): boolean;
		_ensureIsConstant(constant : string): void;
		get(constant : string): number;
		set(constant : string, value : number): void;
		reset(constant : string): void;
		instance : ConstantHelper;
}
declare interface Services {
		new (provided : number, accepted? : number);
		provided : number;
		accepted : number;
		isFullNode(services : number): boolean;
		isLightNode(services : number): boolean;
		isNanoNode(services : number): boolean;
		NONE : number;
		NANO : number;
		LIGHT : number;
		FULL : number;
		_provided : number;
		_accepted : number;
}
declare interface Timers {
		new ();
		setTimeout(key : string, fn : Timers.prototype.SetTimeout1, waitTime : number): void;
		clearTimeout(key : string | Hash): void;
		resetTimeout(key : string, fn : (() => void) | (() => any) | ResetTimeout1, waitTime : number): void;
		timeoutExists(key : string): boolean;
		setInterval(key : string, fn : (() => void) | (() => void) | SetInterval1, intervalTime : number): void;
		clearInterval(key : any): void;
		resetInterval(key : any, fn : any, intervalTime : any): void;
		intervalExists(key : any): boolean;
		clearAll(): void;
		_timeouts : /*no type*/{};
		_intervals : /*no type*/{};
}
declare interface Version {
		new (): Version;
}

declare namespace Version{
		function isCompatible(code : number | ((peerAddress : PeerAddress, headHash : Hash, challengeNonce : Float32Array) => boolean)): boolean;
		export var CODE : number;
}
declare interface Time {
		new (offset : any);
		now(): number;
		_offset : number;
		offset : number;
}
declare interface IteratorUtils {
		new (): IteratorUtils;
}

declare namespace IteratorUtils{
		function alternate(...iterators : IteratorUtils.Alternate0): IteratorUtils.AlternateRet;
}
declare interface ArrayUtils {
		new (): ArrayUtils;
}

declare namespace ArrayUtils{
		function randomElement(arr : ArrayUtils.RandomElement0): ArrayUtils.RandomElementRet;
		function subarray(uintarr : Float32Array, begin : number, end : number): Float32Array;
		function k_combinations(fn*(list : ArrayUtils.K_combinations0): ArrayUtils.K_combinationsRet;
}
declare interface HashMap {
		new (fnHash? : () => void);
		get(key : any): any;
		put(key : any, value : any): void;
		remove(key : any): void;
		clear(): void;
		contains(key : any): boolean;
		keys(): HashMap.prototype.KeysRet;
		keyIterator(): HashMap.prototype.KeyIteratorRet;
		values(): HashMap.prototype.ValuesRet;
		valueIterator(): HashMap.prototype.ValueIteratorRet;
		length : number;
		isEmpty(): boolean;
		_hash(o : any): any;
		_fnHash(o : any): string;
}
declare interface HashSet {
		new (fnHash : any);
		add(value : any): void;
		addAll(collection : any): void;
		get(value : any): any;
		remove(value : any): void;
		removeAll(collection : any): void;
		clear(): void;
		contains(value : Address | InvVector): boolean;
		values(): HashSet.prototype.ValuesRet;
		valueIterator(): /* IteratorUtils.alternate.!0 */ any;
	:Symbol : {
				iterator(): /* IteratorUtils.alternate.!0 */ any;
	}
		length : number;
		isEmpty(): boolean;
		_hash(o : any): any;
		_fnHash(o : any): string;
}
declare interface LimitHashSet {
		new (limit : number, fnHash? : () => void);
		add(value : any): void;
		addAll(collection : any): void;
		get(value : any): any;
		remove(value : any): void;
		removeAll(collection : any): void;
		clear(): any;
		contains(value : any): boolean;
		values(): LimitHashSet.prototype.ValuesRet;
		valueIterator(): LimitHashSet.prototype.ValueIteratorRet;
	:Symbol : {
				iterator(): /* LimitHashSet.prototype.valueIterator.!ret */ any;
	}
		length : number;
		isEmpty(): boolean;
		_hash(o : any): any;
}
declare interface InclusionHashSet {
		new (fnHash? : () => void);
		add(value : Hash): void;
		addAll(collection : InclusionHashSet.prototype.AddAll0): void;
		remove(value : Hash): void;
		removeAll(collection : Array<Hash>): void;
		clear(): void;
		contains(value : Hash): boolean;
		values(): InclusionHashSet.prototype.ValuesRet;
		valueIterator(): InclusionHashSet.prototype.ValueIteratorRet;
	:Symbol : {
				iterator(): /* InclusionHashSet.prototype.valueIterator.!ret */ any;
	}
		length : number;
		isEmpty(): boolean;
		_addHashed(hash : string): void;
		clone(): InclusionHashSet;
		_hash(o : Hash): Hash;
		_set : Set;
		_fnHash(txHash : Hash): string;
}
declare interface LimitInclusionHashSet {
		new (limit : number, fnHash? : () => void);
		add(value : InvVector): void;
		addAll(collection : any): void;
		remove(value : any): void;
		removeAll(collection : any): void;
		clear(): void;
		contains(value : InvVector): boolean;
		values(): LimitInclusionHashSet.prototype.ValuesRet;
		valueIterator(): void;
	:Symbol : {
				iterator(): void;
	}
		isEmpty(): boolean;
		_addHashed(hash : string): void;
		clone(): LimitInclusionHashSet;
		_hash(o : InvVector): InvVector;
		_limit : number;
		_fnHash(o : any): string;
}
declare interface LimitIterable {
		new (it : /* LimitIterable.!0 */ any, limit : number);
	:Symbol : {
				iterator(): LimitIterable.prototype.:Symbol.IteratorRet;
	}
		iterator(iterator : LimitIterable.Iterator0, limit : number): LimitIterable.IteratorRet;
}
declare interface LinkedList {
		new (...args : any);
		push(value : any): any;
		_push(entry : /* LinkedList.prototype._push0 */ any): any;
		unshift(value : any): void;
		_unshift(entry : /* LinkedList.prototype._unshift0 */ any): any;
		pop(): /* !this._head.value */ any;
		shift(): /* !this._tail.value */ any;
		_remove(entry : any): any;
		clear(): any;
	:Symbol : {
				iterator(): LinkedList.prototype.:Symbol.IteratorRet;
	}
		iterator(param1 : () => void): /* !this._tail.value */ any;
		isEmpty(): boolean;
		length : number;
		_length : number;
		last : ForwardedSignal;
	_head : {
				next : /* LinkedList._head */ any;
				prev : /* LinkedList._head */ any;
	}
		_tail : /* LinkedList._head */ any;
		first : ForwardedSignal;
}
declare interface UniqueLinkedList extends LinkedList {
		new (fnHash? : () => void);
		push(value : any, moveBack : boolean): any;
		_push(entry : any): any;
		unshift(value : any): any;
		_unshift(entry : any): any;
		pop(): any;
		shift(): any;
		clear(): any;
		get(value : any): any;
		contains(value : any): boolean;
		remove(value : any): any;
		moveBack(value : ForwardedSignal): any;
		_moveBack(entry : any): any;
		_map : HashMap;
		_length : number;
}
declare interface Queue {
		new (...args : () => void);
		_newQueue(...args : any): LinkedList;
		enqueue(value : any): any;
		enqueueAll(values : Queue.prototype.EnqueueAll0): any;
		dequeue(): any;
		dequeueMulti(count : number): Queue.prototype.DequeueMultiRet;
		peek(): /* !this._queue.first */ any;
		clear(): any;
		isEmpty(): boolean;
		length : number;
}
declare interface UniqueQueue extends Queue {
		new (fnHash? : () => void);
		_newQueue(...args : any): UniqueLinkedList;
		contains(value : any): boolean;
		remove(value : any): any;
		requeue(value : ForwardedSignal): any;
		_queue : UniqueLinkedList;
}
declare interface ThrottledQueue extends UniqueQueue {
		new (maxAtOnce? : number, allowanceNum? : number, allowanceInterval? : number, maxSize? : number, allowanceCallback? : any);
		stop(): any;
		enqueue(value : {} | InvVector): any;
		dequeue(): any;
		dequeueMulti(count : number): Array<any>;
		isAvailable(): boolean;
		available : number;
		_maxSize : number;
		_maxAtOnce : number;
		_availableNow : number;
}
declare interface SortedList {
		new (sortedList : Array<any>, compare : () => void);
		indexOf(o : Transaction): number;
		_insertionIndex(o : Transaction): number;
		add(value : Transaction): void;
		shift(): Transaction;
		pop(): Transaction;
		peekFirst(): /* !this._list.0 */ any;
		peekLast(): /* !this._list.<i> */ any;
		remove(value : Transaction): void;
		clear(): void;
		values(): SortedList.prototype.ValuesRet;
	:Symbol : {
				iterator(): SortedList.prototype.:Symbol.IteratorRet;
	}
		copy(): SortedList;
		length : number;
		_compare(a : Transaction, b : Transaction): number;
		_list : Array<Transaction>;
}
declare interface Assert {
		new (): Assert;
}

declare namespace Assert{
		function that(condition : boolean, message? : string): any;
}
declare interface BufferUtils {
		new (): BufferUtils;
}

declare namespace BufferUtils{
		function toAscii(buffer : Float32Array): string;
		function fromAscii(string : any): Float32Array;
		function _codePointTextDecoder(u8 : Float32Array): void;
		function _tripletToBase64(num : number): string;
		function _base64encodeChunk(u8 : Float32Array, start : number, end : number): string;
		function _base64fromByteArray(u8 : Float32Array): string;
		function toBase64(buffer : SerialBuffer): string;
		function fromBase64(base64 : string): SerialBuffer;
		function toBase64Url(buffer : any): string;
		function fromBase64Url(base64 : string): SerialBuffer;
		function toBase32(buf : Float32Array, alphabet? : string): string;
		function fromBase32(base32 : string, alphabet? : string): Float32Array;
		function toHex(buffer : any): string;
		function fromHex(hex : any): SerialBuffer;
		function toBinary(buffer : Array<number> | Float32Array): string;
		function concatTypedArrays(a : SerialBuffer | Float32Array, b : SerialBuffer | Float32Array): any;
		function equals(a : Float32Array, b : Float32Array | SerialBuffer): boolean;
		function compare(a : Float32Array | SerialBuffer, b : Float32Array | SerialBuffer): number;
		function xor(a : Float32Array, b : Float32Array): Float32Array;
		export var BASE64_ALPHABET : string;
	var BASE32_ALPHABET : {
				RFC4648 : string;
				RFC4648_HEX : string;
				NIMIQ : string;
	}
		export var HEX_ALPHABET : string;
		export var _BASE64_LOOKUP : Array<string>;
}
declare interface SerialBuffer extends Float32Array {
		new (bufferOrArrayOrLength : any);
		subarray(start : number, end : number): Float32Array;
		readPos : number;
		writePos : number;
		reset(): any;
		read(length : any): Float32Array;
		write(array : SerialBuffer | Float32Array): void;
		readUint8(): number;
		writeUint8(value : number | /* Account.Type */ any): void;
		readUint16(): number;
		writeUint16(value : number): void;
		readUint32(): number;
		writeUint32(value : number): void;
		readUint64(): number;
		writeUint64(value : number): void;
		readVarUint(): number;
		writeVarUint(value : number): void;
		readFloat64(): number;
		writeFloat64(value : number): void;
		readString(length : number): string;
		writeString(value : string, length : number): void;
		readPaddedString(length : number): string;
		writePaddedString(value : string, length : number): void;
		readVarLengthString(): string;
		writeVarLengthString(value : string): void;
		varUintSize(value : number | /* Message.Type */ any): number;
		varLengthStringSize(value : string): number;
		_view : DataView;
		_readPos : number;
		_writePos : number;
}
declare interface Synchronizer extends Observable {
		new (throttleAfter? : number, throttleWait? : number);
		push(fn : Synchronizer.prototype.Push0): /* Synchronizer.prototype.+Promise */ any;
		clear(): any;
		_doWork(): void;
		working : boolean;
		length : number;
		totalElapsed : number;
		totalJobs : number;
		totalThrottles : number;
		_queue : LinkedList;
		_working : boolean;
		_throttleAfter : number;
		_throttleWait : number;
		_elapsed : number;
		_totalElapsed : number;
		_totalJobs : number;
		_totalThrottles : number;
		bannedUntil : number;
		banBackoff : number;
		failedAttempts : number;
		state : number;
		score : number;
}
declare interface MultiSynchronizer extends Observable {
		new (throttleAfter? : number, throttleWait? : number);
		push(tag : string, fn : MultiSynchronizer.prototype.Push1): Promise;
		clear(): any;
		isWorking(tag : string): boolean;
		_throttleAfter : number;
		_throttleWait : number;
}
declare interface PrioritySynchronizer extends Observable {
		new (numPriorities : number, throttleAfter? : number, throttleWait? : number);
		push(priority : number, fn : PrioritySynchronizer.prototype.Push1): /* PrioritySynchronizer.prototype.+Promise */ any;
		clear(): any;
		_doWork(): void;
		working : boolean;
		length : number;
		totalElapsed : number;
		totalJobs : number;
		totalThrottles : number;
		_queues : Array<LinkedList>;
		_working : boolean;
		_throttleAfter : number;
		_throttleWait : number;
		_elapsed : number;
		_totalElapsed : number;
		_totalJobs : number;
		_totalThrottles : number;
}
declare interface RateLimit {
		new (allowedOccurences : number, timeRange? : number);
		note(number? : number): boolean;
		_allowedEntries : number;
		_timeRange : number;
		_lastReset : number;
		_counter : number;
}
declare interface IWorker {
		new (): IWorker;
}

declare namespace IWorker{
		function createProxy(clazz : {} | (() => void), name : string, worker : IWorker.CreateProxy2): /* IWorker.+Promise */ any;
		function startWorkerForProxy(clazz : {} | (() => void), name : string, workerScript : string): any;
		function startWorkerPoolForProxy(clazz : {} | (() => void), name : string, size : number, workerScript : any): /* IWorker.!ret */ any;
		function stubBaseOnMessage(msg : any): void;
		export var _workersSupported : boolean;
		export var areWorkersAsync : boolean;
		export var _insideWebWorker : boolean;
		function prepareForWorkerUse(baseClazz : IWorker.PrepareForWorkerUse0, impl : any): void;
		function _loadBrowserScript(url : any, resolve : any): void;
		interface Proxy {
				new (clazz : {} | (() => void)): IWorker.ProxyRet;
	}

		interface Stub {
				new (clazz : {} | (() => void)): IWorker.StubRet;
	}

		interface Pool {
				new (clazz : {} | (() => void)): IWorker.PoolRet;
	}

	var _workerImplementation : {
	}
}
declare interface WasmHelper {
		new (): WasmHelper;
}

declare namespace WasmHelper{
		function doImportBrowser(): void;
		function doImportNodeJs(): void;
		function importWasmBrowser(wasm : string, module : string): /* WasmHelper.+Promise */ any;
		function importWasmNodeJs(wasm : string, module : any): boolean;
		function importScriptBrowser(script : string, module : any): boolean;	function importScriptBrowser();
		function importScriptNodeJs(script : string, module : any): boolean;
		function fireModuleLoaded(module : any): void;
		function _loadBrowserScript(url : string): void;
		function _adjustWasmPath(wasm : string): string;
		function _adjustScriptPath(script : string): string;
		export var _importStarted : boolean;
		export var _importFinished : boolean;
	namespace _moduleLoadedCallbacks{
	}
}
declare interface CryptoWorker {
		new ();
		computeArgon2d(input : Float32Array): void;
		computeArgon2dBatch(inputs : CryptoWorker.prototype.ComputeArgon2dBatch0): void;
		kdf(key : Float32Array, salt : Float32Array, iterations : number): void;
		blockVerify(block : Float32Array, transactionValid : CryptoWorker.prototype.BlockVerify1, timeNow : number, genesisHash : Float32Array, networkId : number): void;
		getInstanceAsync(): CryptoWorker;
		_workerAsync : CryptoWorker;
}
declare interface CryptoWorkerImpl {
		new ();
		init(name : string): void;
		computeArgon2d(input : Float32Array): Float32Array;
		computeArgon2dBatch(inputs : CryptoWorkerImpl.prototype.ComputeArgon2dBatch0): CryptoWorkerImpl.prototype.ComputeArgon2dBatchRet;
		kdf(key : Float32Array, salt : Float32Array, iterations : number): Float32Array;
		blockVerify(blockSerialized : Float32Array, transactionValid : CryptoWorkerImpl.prototype.BlockVerify1, timeNow : number, genesisHash : Float32Array, networkId : number): CryptoWorkerImpl.prototype.BlockVerifyRet;
}
declare interface CryptoUtils {
		new (): CryptoUtils;
}

declare namespace CryptoUtils{
		function computeHmacSha512(key : SerialBuffer | Float32Array, data : SerialBuffer | Float32Array): Float32Array;
		function computePBKDF2sha512(password : Float32Array, salt : Float32Array, iterations : number, derivedKeyLength : number): SerialBuffer;	function computePBKDF2sha512();
		function otpKdf(message : Float32Array, key : Float32Array | string, salt : Float32Array, iterations : number): Float32Array;
		function encryptOtpKdf(data : Float32Array, key : Float32Array): SerialBuffer;
		function decryptOtpKdf(data : SerialBuffer, key : Float32Array | string): void;
		export var SHA512_BLOCK_SIZE : number;
		export var ENCRYPTION_INPUT_SIZE : number;
		export var ENCRYPTION_KDF_ROUNDS : number;
		export var ENCRYPTION_CHECKSUM_LENGTH : number;
		export var ENCRYPTION_SALT_LENGTH : number;
		export var ENCRYPTION_SIZE : number;
}
declare interface CRC8 {
		new (): CRC8;
}

declare namespace CRC8{
		function _createTable(): Array<number>;
		function compute(buf : Float32Array): number;
		export var _table : Array<number>;
}
declare interface CRC32 {
		new (): CRC32;
}

declare namespace CRC32{
		function _createTable(): Array<number>;
		function compute(buf : Float32Array | SerialBuffer): number;
		export var _table : Array<number>;
		export var _hex_chars : Array<string>;
		export var _POLYNOMIAL : number;
}
declare interface NumberUtils {
		new (): NumberUtils;
}

declare namespace NumberUtils{
		function isUint8(val : any): boolean;
		function isUint16(val : number): boolean;
		function isUint32(val : number): boolean;
		function isUint64(val : any): boolean;
		function randomUint32(): number;
		function randomUint64(): number;
		function fromBinary(bin : string): number;
		export var UINT8_MAX : number;
		export var UINT16_MAX : number;
		export var UINT32_MAX : number;
		export var UINT64_MAX : number;
}
declare interface MerkleTree {
		new (): MerkleTree;
}

declare namespace MerkleTree{
		function computeRoot(values : MerkleTree.ComputeRoot0, fnHash : any): PublicKey;
		function _computeRoot(values : Array<any>, fnHash : () => void): Hash;
		function _hash(o : any): any;
}
declare interface MerklePath {
		new (nodes : Array<MerklePathNode>);
		computeRoot(leafValue : PublicKey, fnHash : any): PublicKey;
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		equals(o : MerklePath): boolean;
		nodes : Array<MerklePathNode>;
		compute(values : MerklePath.Compute0, leafValue : any, fnHash : any): MerklePath;
		_compute(values : Array<any>, leafHash : any, path : /* MerklePath._compute2 */ any, fnHash : () => void): /* MerklePath._computeRet */ any;
		_compress(nodes : /* MerklePath._compress0 */ any): Float32Array;
		unserialize(buf : SerialBuffer): MerklePath;
		_nodes : Array</* MerklePath.+MerklePathNode */ any>;
}
declare interface MerklePathNode {
		new (hash : Hash, left : boolean);
		left : boolean;
		equals(o : MerklePathNode): boolean;
		hash : Hash;
		_left : boolean;
}
declare interface MerkleProof {
		new (hashes : Array<any>, operations : Array<number> | Array</* MerkleProof.Operation */ any>);
		computeRoot(leafValues : MerkleProof.prototype.ComputeRoot0, fnHash : any): Hash;
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		equals(o : MerkleProof): boolean;
	nodes : {
	}
		compute(values : MerkleProof.Compute0, leafValues : MerkleProof.Compute1, fnHash : () => void): MerkleProof;
		computeWithAbsence(values : MerkleProof.ComputeWithAbsence0, leafValues : any, fnCompare : any, fnHash : any): MerkleProof;
		_compute(values : /* MerkleProof._compute0 */ any, leafHashes : /* MerkleProof._compute1 */ any, fnHash : () => void): /* MerkleProof._computeRet */ any;
		_compress(operations : /* MerkleProof._compress0 */ any): Float32Array;
		unserialize(buf : SerialBuffer): MerkleProof;
	Operation : {
				CONSUME_PROOF : number;
				CONSUME_INPUT : number;
				HASH : number;
	}
		_nodes : Array<Hash>;
		_operations : Array</* MerkleProof.Operation */ any>;
}
declare interface MnemonicUtils {
		new (): MnemonicUtils;
}

declare namespace MnemonicUtils{
		function _crcChecksum(entropy : Float32Array): string;
		function _sha256Checksum(entropy : Float32Array): string;
		function _entropyToBits(entropy : Float32Array): string;
		function _normalizeEntropy(entropy : SerialBuffer | Float32Array): SerialBuffer | Float32Array;
		function _bitsToMnemonic(bits : string, wordlist : /* MnemonicUtils._bitsToMnemonic1 */ any): /* MnemonicUtils._bitsToMnemonicRet */ any;
		function _mnemonicToBits(mnemonic : Array<string> | string, wordlist : /* MnemonicUtils._mnemonicToBits1 */ any): string;
		function _bitsToEntropy(bits : string, legacy : boolean): Float32Array;
		function entropyToMnemonic(entropy : /* MnemonicUtils.+Entropy */ any, wordlist? : Array<string>): MnemonicUtils.EntropyToMnemonicRet;
		function entropyToLegacyMnemonic(entropy : string | Float32Array, wordlist? : MnemonicUtils.EntropyToLegacyMnemonic1): MnemonicUtils.EntropyToLegacyMnemonicRet;
		function mnemonicToEntropy(mnemonic : Array<string> | string, wordlist? : MnemonicUtils.MnemonicToEntropy1): any;
		function legacyMnemonicToEntropy(mnemonic : Array<string> | string, wordlist? : MnemonicUtils.LegacyMnemonicToEntropy1): Entropy;
		function _salt(password : string): string;
		function mnemonicToSeed(mnemonic : string | Array<string>, password? : string): SerialBuffer;	function mnemonicToSeed();
		function mnemonicToExtendedPrivateKey(mnemonic : string | Array<string>, password? : string): /* MnemonicUtils.+ExtendedPrivateKey */ any;
		function isCollidingChecksum(entropy : any): boolean;
		function getMnemonicType(mnemonic : string | Array<string>, wordlist? : Array<string>): number;	function getMnemonicType();
		export var ENGLISH_WORDLIST : Array<string>;
	var MnemonicType : {
				UNKNOWN : number;
				LEGACY : number;
				BIP39 : number;
	}
}
declare interface PlatformUtils {
		new (): PlatformUtils;
}

declare namespace PlatformUtils{
		function isBrowser(): boolean;
		function isNodeJs(): boolean;
		function supportsWebRTC(): boolean;
		function supportsWS(): boolean;
		function isOnline(): boolean;
}
declare interface StringUtils {
		new (): StringUtils;
}

declare namespace StringUtils{
		function isMultibyte(str : string): boolean;
		function isHex(str : any): boolean;
		function isHexBytes(str : any, length? : number): boolean;
		function commonPrefix(str1 : string, str2 : string): string;
		function lpad(str : string, padString : string, length : number): string;
}
declare interface Policy {
		new (): Policy;
}

declare namespace Policy{
		function coinsToSatoshis(coins : number): number;
		function satoshisToCoins(satoshis : number): number;
		function supplyAfter(blockHeight : number): any;
		function _supplyAfter(initialSupply : any, blockHeight : number, startHeight? : number): any;
		function blockRewardAt(blockHeight : number): number;
		function _blockRewardAt(currentSupply : any, blockHeight : number): number;
		export var _supplyCacheMax : number;
		export var BLOCK_TIME : number;
		export var BLOCK_SIZE_MAX : number;
		export var DIFFICULTY_BLOCK_WINDOW : number;
		export var DIFFICULTY_MAX_ADJUSTMENT_FACTOR : number;
		export var TRANSACTION_VALIDITY_WINDOW : number;
		export var SATOSHIS_PER_COIN : number;
		export var TOTAL_SUPPLY : number;
		export var INITIAL_SUPPLY : number;
		export var EMISSION_SPEED : number;
		export var EMISSION_TAIL_START : number;
		export var EMISSION_TAIL_REWARD : number;
		export var M : number;
		export var K : number;
		export var DELTA : number;
		export var NUM_BLOCKS_VERIFICATION : number;
		export var NUM_SNAPSHOTS_MAX : number;
		export var _supplyCache : Map;
		export var _supplyCacheInterval : number;
}
declare interface Serializable {
		new ();
		equals(o : any): boolean;
		compare(o : /* Serializable.prototype.+Serializable */ any): number;
		hashCode(): string;
		serialize(buf? : SerialBuffer): void;
		toBase64(): string;
		toHex(): string;
}
declare interface Hash extends Serializable {
		new (arg : Float32Array | SerialBuffer, algorithm? : number | /* Hash.Algorithm */ any);
		serialize(buf? : SerialBuffer): SerialBuffer;
		subarray(begin : number, end : number): Float32Array;
		equals(o : Hash): boolean;
		array : SerialBuffer;
		light(arr : Float32Array | SerialBuffer): Hash;
		blake2b(arr : Float32Array | SerialBuffer): Hash;
		hard(arr : Float32Array): Hash;
		argon2d(arr : Float32Array): Hash;
		sha256(arr : Float32Array | SerialBuffer): Hash;
		sha512(arr : Float32Array): Hash;
		compute(arr : Float32Array | SerialBuffer, algorithm : /* Hash.Algorithm */ any | number): Hash;
		unserialize(buf : SerialBuffer, algorithm? : /* Hash.Algorithm */ any | number): Hash;
		fromBase64(base64 : string): Hash;
		fromHex(hex : string): Hash;
		fromString(str : string): Hash;
		isHash(o : Hash): boolean;
		getSize(algorithm : number | /* Hash.Algorithm */ any): any;
		computeBlake2b(input : Float32Array | SerialBuffer): Float32Array;
		computeSha256(input : Float32Array | SerialBuffer): Float32Array;
		computeSha512(input : SerialBuffer | Float32Array): Float32Array;
	Algorithm : {
				BLAKE2B : number;
				ARGON2D : number;
				SHA256 : number;
				SHA512 : number;
	}
		NULL : Hash;
		_obj : SerialBuffer;
}
declare interface PrivateKey extends Serializable {
		new (arg : Float32Array);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		overwrite(privateKey : PrivateKey): void;
		equals(o : Serializable): boolean;
		generate(): PrivateKey;
		unserialize(buf : SerialBuffer): PrivateKey;
		_privateKeyDelinearize(privateKey : Float32Array, publicKey : Float32Array, publicKeysHash : Float32Array): Float32Array;
		SIZE : number;
}
declare interface PublicKey extends Serializable {
		new (arg : Float32Array | SerialBuffer);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		equals(o : any): boolean;
		hash(): Hash;
		compare(o : PublicKey): number;
		toAddress(): Address;
		toPeerId(): PeerId;
		copy(o : PublicKey): PublicKey;
		derive(privateKey : PrivateKey): PublicKey;
		sum(publicKeys : PublicKey.Sum0): PublicKey;
		unserialize(buf : SerialBuffer): PublicKey;
		_delinearizeAndAggregatePublicKeys(publicKeys : /* PublicKey._delinearizeAndAggregatePublicKeys0 */ any): PublicKey;
		_publicKeyDerive(privateKey : Float32Array): Float32Array;
		_publicKeysHash(publicKeys : /* PublicKey._publicKeysHash0 */ any): Float32Array;
		_publicKeyDelinearize(publicKey : Float32Array, publicKeysHash : Float32Array): Float32Array;
		_publicKeysDelinearizeAndAggregate(publicKeys : /* PublicKey._publicKeysDelinearizeAndAggregate0 */ any, publicKeysHash : Float32Array): Float32Array;
		SIZE : number;
}
declare interface KeyPair extends Serializable {
		new (privateKey : PrivateKey, publicKey : PublicKey, locked : boolean, lockSalt : Float32Array);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		exportEncrypted(key : Float32Array, unlockKey? : Float32Array): SerialBuffer;
		encryptedSize : number;
		lock(key : Float32Array, lockSalt? : Float32Array): void;
		unlock(key : Float32Array): void;
		relock(): void;
		_clearUnlockedPrivateKey(): void;
		_otpPrivateKey(key : Float32Array): PrivateKey;
		isLocked : boolean;
		equals(o : Serializable): boolean;
		_privateKey : PrivateKey;
		publicKey : PublicKey;
		privateKey : PrivateKey;
		generate(): KeyPair;
		derive(privateKey : PrivateKey): KeyPair;
		fromHex(hexBuf : string): KeyPair;
		fromEncrypted(buf : SerialBuffer, key : Float32Array | string): KeyPair;
		unserialize(buf : SerialBuffer): KeyPair;
		LOCK_KDF_ROUNDS : number;
		_locked : boolean;
		_lockedInternally : boolean;
}
declare interface Entropy extends Serializable {
		new (arg : Float32Array);
		toExtendedPrivateKey(password? : string, wordlist? : Entropy.prototype.ToExtendedPrivateKey1): any;
		toMnemonic(wordlist? : Array<string>): Entropy.prototype.ToMnemonicRet;
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		overwrite(entropy : Entropy): void;
		equals(o : Serializable): boolean;
		generate(): Entropy;
		unserialize(buf : SerialBuffer): Entropy;
		SIZE : number;
}
declare interface ExtendedPrivateKey extends Serializable {
		new (key : PrivateKey, chainCode : Float32Array);
		derive(index : number): ExtendedPrivateKey;
		derivePath(path : string): /* !this */ any;
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		equals(o : Serializable): boolean;
		toAddress(): any;
		privateKey : PrivateKey;
		generateMasterKey(seed : SerialBuffer | Float32Array): ExtendedPrivateKey;
		isValidPath(path : string): boolean;
		derivePathFromSeed(path : string, seed : Float32Array): ExtendedPrivateKey;
		unserialize(buf : SerialBuffer): ExtendedPrivateKey;
		CHAIN_CODE_SIZE : number;
		_key : PrivateKey;
}
declare interface RandomSecret extends Serializable {
		new (arg : Float32Array);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		equals(o : Serializable): boolean;
		unserialize(buf : SerialBuffer): RandomSecret;
		SIZE : number;
}
declare interface Signature extends Serializable {
		new (arg : Float32Array | SerialBuffer);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		verify(publicKey : PublicKey | Promise, data : Float32Array): boolean;
		equals(o : Serializable): boolean;
		copy(o : Signature): Signature;
		create(privateKey : PrivateKey, publicKey : PublicKey, data : Float32Array): Signature;
		fromPartialSignatures(commitment : Commitment, signatures : Signature.FromPartialSignatures1): Signature;
		unserialize(buf : SerialBuffer): Signature;
		_combinePartialSignatures(combinedCommitment : Float32Array, partialSignatures : /* Signature._combinePartialSignatures1 */ any): Float32Array;
		_aggregatePartialSignatures(partialSignatures : /* Signature._aggregatePartialSignatures0 */ any): Float32Array;
		_scalarsAdd(a : Float32Array, b : Float32Array): Float32Array;
		_signatureCreate(privateKey : Float32Array, publicKey : Float32Array | SerialBuffer, message : Float32Array): Float32Array;
		_signatureVerify(publicKey : Float32Array | SerialBuffer, message : Float32Array, signature : Float32Array): boolean;
		SIZE : number;
}
declare interface Commitment extends Serializable {
		new (arg : Float32Array);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		equals(o : Serializable): boolean;
		copy(o : Commitment): Commitment;
		sum(commitments : Commitment.Sum0): Commitment;
		unserialize(buf : SerialBuffer): Commitment;
		_commitmentsAggregate(commitments : /* Commitment._commitmentsAggregate0 */ any): Float32Array;
		SIZE : number;
}
declare interface CommitmentPair extends Serializable {
		new (secret : RandomSecret, commitment : Commitment);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		equals(o : Serializable): boolean;
		secret : RandomSecret;
		commitment : Commitment;
		generate(): /* CommitmentPair.+CommitmentPair */ any;
		unserialize(buf : SerialBuffer): CommitmentPair;
		fromHex(hexBuf : string): CommitmentPair;
		_commitmentCreate(randomness : Float32Array): /* CommitmentPair._commitmentCreateRet */ any;
		SERIALIZED_SIZE : number;
		RANDOMNESS_SIZE : number;
		_secret : RandomSecret;
		_commitment : Commitment;
}
declare interface PartialSignature extends Serializable {
		new (arg : Float32Array);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		equals(o : Serializable): boolean;
		create(privateKey : PrivateKey, publicKey : PublicKey, publicKeys : PartialSignature.Create2, secret : RandomSecret, aggregateCommitment : Commitment, data : Float32Array): /* PartialSignature.+PartialSignature */ any;
		unserialize(buf : SerialBuffer): PartialSignature;
		_delinearizedPartialSignatureCreate(publicKeys : /* [+Float32Array */ any | SerialBuffer] | Array<Float32Array> | _delinearizedPartialSignatureCreate0, privateKey : Float32Array, publicKey : Float32Array | SerialBuffer, secret : Float32Array, aggregateCommitment : Float32Array, message : Float32Array): Float32Array;
		SIZE : number;
}
declare interface Address extends Serializable {
		new (arg : any);
		serialize(buf? : SerialBuffer): SerialBuffer;
		subarray(begin : any, end : any): Float32Array;
		serializedSize : number;
		equals(o : any): boolean;
		toUserFriendlyAddress(withSpaces? : boolean): string;
		copy(o : Address): Address;
		fromHash(hash : Hash): Address;
		unserialize(buf : SerialBuffer): Address;
		fromString(str : any): Address;
		fromBase64(base64 : string): Address;
		fromHex(hex : string): Address;
		fromUserFriendlyAddress(str : string): Address;
		_ibanCheck(str : string): number;
		CCODE : string;
		SERIALIZED_SIZE : number;
		HEX_SIZE : number;
		NULL : Address;
}
declare interface Account {
		new (type : /* Account.Type */ any | number, balance : number);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		equals(o : any): boolean;
		balance : number;
		withBalance(balance : number): void;
		withOutgoingTransaction(transaction : Transaction, blockHeight : number, transactionsCache : TransactionCache, revert? : boolean): /* Account.prototype.+Account */ any;
		withIncomingTransaction(transaction : Transaction | number, blockHeight : number, revert? : boolean): Account;
		withContractCommand(transaction : Transaction | number, blockHeight : number, revert? : boolean): Account;
		isInitial(): boolean;
		isToBePruned(): boolean;
		unserialize(buf : SerialBuffer): any;
	Type : {
				BASIC : number;
				VESTING : number;
				HTLC : number;
	}
		INITIAL : BasicAccount;
		_balance : number;
}
declare interface PrunedAccount {
		new (address : Address, account : any);
		compare(o : PrunedAccount): number;
		serialize(buf : SerialBuffer): /* !this */ any;
		serializedSize : number;
		address : Address;
		account : ExtendedTransaction;
		unserialize(buf : SerialBuffer): PrunedAccount;
		_account : ExtendedTransaction;
}
declare interface BasicAccount extends Account {
		new (balance? : number);
		equals(o : any): boolean;
		withBalance(balance : number): BasicAccount;
		withIncomingTransaction(transaction : Transaction | number, blockHeight : number, revert? : boolean): Account;
		withContractCommand(transaction : Transaction | number, blockHeight : number, revert? : boolean): /* !this */ any;
		isInitial(): boolean;
		copy(o : BasicAccount): BasicAccount;
		unserialize(buf : SerialBuffer): BasicAccount;
		verifyOutgoingTransaction(transaction : Transaction): boolean;
		verifyIncomingTransaction(transaction : Transaction): boolean;
		value : ForwardedSignal;
	prev : {
				next : /* BasicAccount.prev */ any;
				prev : /* LinkedList._head */ any;
				value : ForwardedSignal;
	}
		current : NanoConsensusAgent;
		onerror(): void;
		onopen(): void;
		bannedUntil : number;
		banBackoff : number;
		failedAttempts : number;
		state : number;
		score : number;
		_balance : number;
}
declare interface Contract extends Account {
		new (type : /* Account.Type */ any | number, balance : number);
		withIncomingTransaction(transaction : any, blockHeight : number, revert? : boolean): Account;
		withContractCommand(transaction : any, blockHeight : number, revert? : boolean): /* !this */ any;
		verifyIncomingTransaction(transaction : Transaction): boolean;
}
declare interface HashedTimeLockedContract extends Contract {
		new (balance : number, sender : Address, recipient : Address, hashRoot : Hash, hashCount : number, timeout : number, totalAmount : number);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		hashCount : number;
		timeout : number;
		totalAmount : number;
		equals(o : any): boolean;
		withBalance(balance : number): HashedTimeLockedContract;
		withOutgoingTransaction(transaction : any, blockHeight : number, transactionsCache : any, revert? : boolean): Account;
		withIncomingTransaction(transaction : any, blockHeight : number, revert? : boolean): Account;
		sender : Address;
		recipient : Address;
		hashRoot : Hash;
		create(balance : number, blockHeight : number, transaction : any): /* HashedTimeLockedContract.+HashedTimeLockedContract */ any;
		unserialize(buf : SerialBuffer): HashedTimeLockedContract;
		verifyOutgoingTransaction(transaction : Transaction): boolean;
		verifyIncomingTransaction(transaction : Transaction): boolean;
	ProofType : {
				REGULAR_TRANSFER : number;
				EARLY_RESOLVE : number;
				TIMEOUT_RESOLVE : number;
	}
		bannedUntil : number;
		banBackoff : number;
		failedAttempts : number;
		state : number;
		score : number;
		_hashCount : number;
		_timeout : number;
		_totalAmount : number;
		_balance : number;
}
declare interface VestingContract extends Contract {
		new (balance? : number, owner? : Address, vestingStart? : number, vestingStepBlocks? : number, vestingStepAmount? : number, vestingTotalAmount? : number);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		vestingStart : number;
		vestingStepBlocks : number;
		vestingStepAmount : number;
		vestingTotalAmount : number;
		equals(o : any): boolean;
		withBalance(balance : number): VestingContract;
		withOutgoingTransaction(transaction : any, blockHeight : number, transactionsCache : any, revert? : boolean): Account;
		withIncomingTransaction(transaction : any, blockHeight : number, revert? : boolean): Account;
		getMinCap(blockHeight : number): number;
		owner : Address;
		create(balance : number, blockHeight : number, transaction : any): /* VestingContract.+VestingContract */ any;
		unserialize(buf : SerialBuffer): VestingContract;
		verifyOutgoingTransaction(transaction : Transaction): boolean;
		verifyIncomingTransaction(transaction : Transaction): boolean;
		bannedUntil : number;
		banBackoff : number;
		failedAttempts : number;
		state : number;
		score : number;
		_vestingStart : number;
		_vestingStepBlocks : number;
		_vestingStepAmount : number;
		_vestingTotalAmount : number;
		_balance : number;
}
declare interface AccountsTreeNode {
		new (type : number, prefix : string, arg : any, arg2? : Array<any>);
		serialize(buf : SerialBuffer): SerialBuffer;
		serializedSize : number;
		getChildHash(prefix : string): /* !this._childrenHashes */ any;
		getChild(prefix : string): /* !this._childrenSuffixes */ any;
		withChild(prefix : string, childHash : Hash): AccountsTreeNode;
		withoutChild(prefix : string): AccountsTreeNode;
		hasChildren(): /* !this._childrenSuffixes */ any;
		hasSingleChild(): /* !this._childrenSuffixes */ any;
		getFirstChild(): string;
		getLastChild(): string;
		getChildren(): AccountsTreeNode.prototype.GetChildrenRet;
		prefix : string;
		withAccount(account : Account): AccountsTreeNode;
		hash(): /* !this._hash */ any;
		isChildOf(parent : AccountsTreeNode): Array<string>;	isChildOf();
		isTerminal(): boolean;
		isBranch(): boolean;
		_getChildIndex(prefix : string): number;
		equals(o : AccountsTreeNode): boolean;
		terminalNode(prefix : string, account : any): AccountsTreeNode;
		branchNode(prefix : string, childrenSuffixes : AccountsTreeNode.BranchNode1, childrenHashes : AccountsTreeNode.BranchNode2): AccountsTreeNode;
		isTerminalType(type : number): boolean;
		isBranchType(type : number): boolean;
		unserialize(buf : SerialBuffer): AccountsTreeNode;
		BRANCH : number;
		TERMINAL : number;
		_type : number;
		_prefix : string;
		_childrenHashes : Array<Hash>;
}
declare interface AccountsTreeStore {
		new (store : any);
		get(key : string): void;
		put(node : AccountsTreeNode):  /* error */ any;
		remove(node : AccountsTreeNode):  /* error */ any;
		getRootNode(): void;
		getTerminalNodes(startPrefix : string, size : number): /* AccountsTreeStore.prototype.+Promise */ any;
		snapshot(tx? : AccountsTreeStore): AccountsTreeStore;
		transaction(enableWatchdog? : boolean): AccountsTreeStore;
		synchronousTransaction(enableWatchdog? : boolean): SynchronousAccountsTreeStore;
		truncate(): Promise;
		commit(): void;
		abort(): Promise;
		initPersistent(jdb : ConsensusDB): void;
		getPersistent(jdb : ConsensusDB): /* AccountsTreeStore.+AccountsTreeStore */ any;
		createVolatile(): AccountsTreeStore;
}
declare interface AccountsTreeStoreCodec {
		new ();
		encode(obj : any): void;
		decode(obj : any, key : string): AccountsTreeNode;
}
declare interface SynchronousAccountsTreeStore extends AccountsTreeStore {
		new (store : any);
		preload(keys : SynchronousAccountsTreeStore.prototype.Preload0): void;
		getSync(key : string, expectedToBePresent? : boolean): AccountsTreeNode;
		putSync(node : AccountsTreeNode):  /* error */ any;
		removeSync(node : AccountsTreeNode):  /* error */ any;
		getRootNodeSync(): AccountsTreeNode;
}
declare interface AccountsProof {
		new (nodes : Array<AccountsTreeNode>);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		verify(): boolean;
		getAccount(address : Address): Account;
		_getAccount(node : AccountsTreeNode, prefix : string):  /* error */ any;
		root(): Hash;
		length : number;
	nodes : {
	}
		unserialize(buf : SerialBuffer): AccountsProof;
		_nodes : Array<AccountsTreeNode>;
}
declare interface AccountsTreeChunk {
		new (nodes : Array<AccountsTreeNode>, proof : AccountsProof);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		verify(): boolean;
		root(): Hash;
		terminalNodes : Array<AccountsTreeNode>;
		head : AccountsTreeNode;
		length : number;
		tail : AccountsTreeNode;
		proof : AccountsProof;
		unserialize(buf : SerialBuffer): AccountsTreeChunk;
		SIZE_MAX : number;
		EMPTY : AccountsTreeChunk;
		_nodes : Array<AccountsTreeNode>;
		_proof : AccountsProof;
}
declare interface AccountsTree extends Observable {
		new (store : SynchronousAccountsTreeStore): AccountsTree;
		_init(): /* !this */ any;
		put(address : Address, account : Account): Promise;
		_put(address : Address, account : Account): Promise;
		_insert(node : AccountsTreeNode, prefix : string, account : Account, rootPath : /* AccountsTree.prototype._insert3 */ any): Promise;
		_prune(prefix : string, rootPath : /* AccountsTree.prototype._prune1 */ any): Promise;
		_updateKeys(prefix : string, nodeHash : Hash, rootPath : /* AccountsTree.prototype._updateKeys2 */ any): Hash;
		get(address : Address): void;
		getAccountsProof(addresses : AccountsTree.prototype.GetAccountsProof0): AccountsProof;
		_getAccountsProof(node : AccountsTreeNode, prefixes : /* AccountsTree.prototype._getAccountsProof1 */ any, nodes : /* AccountsTree.prototype._getAccountsProof2 */ any): boolean;
		getChunk(startPrefix : string, size : number): AccountsTreeChunk;
		transaction(enableWatchdog? : boolean): AccountsTree;
		synchronousTransaction(enableWatchdog? : boolean): SynchronousAccountsTree;
		partialTree(): PartialAccountsTree;
		snapshot(tx? : AccountsTree): AccountsTree;
		commit(): Promise;
		abort(): Promise;
		root(): void;
		isEmpty(): boolean;
		tx : any;
		getPersistent(jdb : ConsensusDB): AccountsTree;
		createVolatile(): AccountsTree;
		_store : SynchronousAccountsTreeStore;
		_synchronizer : Synchronizer;
}
declare interface SynchronousAccountsTree extends AccountsTree {
		new (store : SynchronousAccountsTreeStore): SynchronousAccountsTree;
		preloadAddresses(addresses : SynchronousAccountsTree.prototype.PreloadAddresses0): Promise;
		_preloadAddresses(node : AccountsTreeNode, prefixes : /* SynchronousAccountsTree.prototype._preloadAddresses1 */ any): void;
		putSync(address : Address, account : Account): void;
		finalizeBatch(): void;
		putBatch(address : Address, account : BasicAccount): void;
		_insertBatch(node : AccountsTreeNode, prefix : string, account : Account, rootPath : /* SynchronousAccountsTree.prototype._insertBatch3 */ any): void;
		_pruneBatch(prefix : string, rootPath : /* SynchronousAccountsTree.prototype._pruneBatch1 */ any): void;
		_updateKeysBatch(prefix : string, rootPath : /* SynchronousAccountsTree.prototype._updateKeysBatch1 */ any): void;
		_updateHashes(node : AccountsTreeNode): Hash;
		getSync(address : Address, expectedToBePresent? : boolean): Account;
		rootSync(): Hash;
}
declare interface PartialAccountsTree extends SynchronousAccountsTree {
		new (store : SynchronousAccountsTreeStore);
		pushChunk(chunk : AccountsTreeChunk): number;
		_mergeProof(proof : AccountsProof, upperBound : string): boolean;
		_putLight(nodes : /* PartialAccountsTree.prototype._putLight0 */ any): void;
		complete : boolean;
		missingPrefix : string;
		synchronousTransaction(enableWatchdog? : boolean): any;	synchronousTransaction();
		transaction(enableWatchdog? : boolean): AccountsTree;
		commit(): void;
		abort(): Promise;
	Status : {
				ERR_HASH_MISMATCH : number;
				ERR_INCORRECT_PROOF : number;
				ERR_UNMERGEABLE : number;
				OK_COMPLETE : number;
				OK_UNFINISHED : number;
	}
		_complete : boolean;
		_lastPrefix : string;
}
declare interface Accounts extends Observable {
		new (accountsTree : AccountsTree);
		initialize(genesisBlock : Block, encodedAccounts : string): void;
		getAccountsProof(addresses : Accounts.prototype.GetAccountsProof0): AccountsProof;
		getAccountsTreeChunk(startPrefix : string): AccountsTreeChunk;
		commitBlock(block : /* IBlockchain.prototype.head */ any, transactionCache : any): Promise;
		commitBlockBody(body : any, blockHeight : number, transactionCache : any): Promise;
		gatherToBePrunedAccounts(transactions : Accounts.prototype.GatherToBePrunedAccounts0, blockHeight : number, transactionCache : TransactionCache): void;
		revertBlock(block : Block, transactionCache : TransactionCache): Promise;
		revertBlockBody(body : BlockBody, blockHeight : number, transactionCache : TransactionCache): Promise;
		get(address : Address, accountType? : /* Account.Type */ any, tree? : AccountsTree): BasicAccount;
		_getSync(address : Address, accountType? : /* Account.Type */ any, tree : SynchronousAccountsTree): BasicAccount;
		transaction(enableWatchdog? : boolean): Accounts;
		snapshot(tx? : Accounts): Accounts;
		partialAccountsTree(): PartialAccountsTree;
		commit(): Promise;
		abort(): Promise;
		_processSenderAccounts(tree : SynchronousAccountsTree, transactions : Array<any>, blockHeight : number, transactionCache : TransactionCache, revert? : boolean): void;
		_processRecipientAccounts(tree : SynchronousAccountsTree, transactions : Array<any>, blockHeight : number, revert? : boolean): void;
		_processContracts(tree : SynchronousAccountsTree, transactions : Array<any>, blockHeight : number, revert? : boolean): void;
		_commitBlockBody(tree : SynchronousAccountsTree, body : any, blockHeight : number, transactionCache : TransactionCache): void;
		_revertBlockBody(tree : SynchronousAccountsTree, body : BlockBody, blockHeight : number, transactionCache : TransactionCache): void;
		_rewardMiner(tree : SynchronousAccountsTree, body : BlockBody, blockHeight : number, revert? : boolean): void;
		hash(): void;
		tx : any;
		getPersistent(jdb : ConsensusDB): Accounts;
		createVolatile(): Accounts;
		_tree : AccountsTree;
}
declare interface BlockHeader {
		new (prevHash : Hash, interlinkHash : Hash, bodyHash : Hash, accountsHash : Hash, nBits : number, height : number, timestamp : number, nonce : number, version : number);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		verifyProofOfWork(buf? : SerialBuffer): void;
		isImmediateSuccessorOf(prevHeader : BlockHeader): boolean;
		hash(buf? : SerialBuffer): /* !this._hash */ any;
		pow(buf? : SerialBuffer): /* !this._pow */ any;
		equals(o : BlockHeader): boolean;
		version : number;
		nBits : number;
		height : number;
		timestamp : number;
		nonce : number;
		prevHash : Hash;
		interlinkHash : Hash;
		bodyHash : Hash;
		accountsHash : Hash;
		target : any;
		difficulty : any;
		unserialize(buf : SerialBuffer): BlockHeader;
	Version : {
				V1 : number;
	}
		CURRENT_VERSION : number;
		SUPPORTED_VERSIONS : Array<number>;
		SERIALIZED_SIZE : number;
		_version : number;
		_nBits : number;
		_height : number;
		_timestamp : number;
		_nonce : number;
}
declare interface BlockInterlink {
		new (hashes : Array<Hash>, prevHash? : Hash, repeatBits? : Float32Array, compressed? : Array<Hash>);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		equals(o : BlockInterlink): boolean;
		hash(): /* !this._hash */ any;
		length : number;
	hashes : {
	}
		_compress(hashes : Array<Hash>, prevHash : Hash): /* BlockInterlink._compressRet */ any;
		unserialize(buf : SerialBuffer, prevHash : Hash): BlockInterlink;
		_hashes : Array<Hash>;
		_compressed : Array<Hash>;
}
declare interface BlockBody {
		new (minerAddr : Address, transactions : Array<number>, extraData? : Float32Array | SerialBuffer, prunedAccounts : Array<PrunedAccount>);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		verify(): boolean;
		getMerkleLeafs(): BlockBody.prototype.GetMerkleLeafsRet;
		hash(): /* !this._hash */ any;
		equals(o : BlockBody): boolean;
		getAddresses(): BlockBody.prototype.GetAddressesRet;
		transactionCount : number;
		prunedAccounts : Array<PrunedAccount>;
		extraData : SerialBuffer;
		minerAddr : Address;
		transactions : /* BlockBody._transactions */ any;
		getMetadataSize(extraData : Float32Array): number;
		unserialize(buf : SerialBuffer): BlockBody;
		_transactions : Array<number>;
		_prunedAccounts : Array</* BlockBody.+PrunedAccount */ any>;
}
declare interface BlockUtils {
		new (): BlockUtils;
}

declare namespace BlockUtils{
		function compactToTarget(compact : number): any;
		function targetToCompact(target : any): number;
		function getTargetHeight(target : any): number;
		function getTargetDepth(target : any): number;
		function compactToDifficulty(compact : number): any;
		function difficultyToCompact(difficulty : number): number;
		function difficultyToTarget(difficulty : number): any;
		function targetToDifficulty(target : any): any;
		function hashToTarget(hash : Hash): any;
		function realDifficulty(hash : Hash): any;
		function getHashDepth(hash : Hash): number;
		function isProofOfWork(hash : Hash, target : number | {}): boolean;
		function isValidCompact(compact : number): boolean;
		function isValidTarget(target : any): boolean;
		function getNextTarget(headBlock : BlockHeader, tailBlock : BlockHeader, deltaTotalDifficulty : any): any;
}
declare interface Subscription {
		new (type : number | /* Subscription.Type */ any, filter? : Array<Address> | number);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		matchesBlock(block : Block): boolean;
		matchesTransaction(transaction : Transaction): boolean;
		addresses : Array<Address>;
		fromAddresses(addresses : Subscription.FromAddresses0): Subscription;
		fromMinFeePerByte(minFeePerByte : number): Subscription;
		unserialize(buf : SerialBuffer): Subscription;
	Type : {
				NONE : number;
				ANY : number;
				ADDRESSES : number;
				MIN_FEE : number;
	}
		NONE : Subscription;
}
declare interface Transaction {
		new (format : /* Transaction.Format */ any | number, sender : Address, senderType : /* Account.Type */ any | number, recipient : Address, recipientType : /* Account.Type */ any | number, value : number, fee : number, validityStartHeight : number, flags : number, data : Float32Array, proof? : Float32Array, networkId? : number);
		serializeContent(buf? : SerialBuffer): SerialBuffer;
		serializedContentSize : number;
		verify(networkId? : number): /* !this._valid */ any;
		_verify(networkId? : number): boolean;
		serializedSize : number;
		serialize(buf? : SerialBuffer): SerialBuffer;
		hash(): /* !this._hash */ any;
		compare(o : Transaction): number;
		compareBlockOrder(o : Transaction): number;
		equals(o : any): boolean;
		getContractCreationAddress(): Address;
		value : number;
		fee : number;
		feePerByte : number;
		networkId : number;
		validityStartHeight : number;
		flags : number;
		hasFlag(flag : Transaction.prototype.HasFlag0): boolean;
		sender : Address;
		recipient : Address;
		proof : Float32Array;
		data : Float32Array;
		unserialize(buf : SerialBuffer): any;
	Format : {
				BASIC : number;
				EXTENDED : number;
	}
	Flag : {
				NONE : number;
				CONTRACT_CREATION : number;
				ALL : number;
	}
		_value : number;
		_fee : number;
		_networkId : number;
		_validityStartHeight : number;
		_flags : number;
		_data : Float32Array;
		_valid : boolean;
}
declare interface SignatureProof {
		new (publicKey : PublicKey, merklePath : MerklePath, signature : Signature);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		equals(o : SignatureProof): boolean;
		verify(sender : Address, data : Float32Array): boolean;
		isSignedBy(sender : Address): boolean;
		publicKey : PublicKey;
		signature : Signature;
		merklePath : MerklePath;
		verifyTransaction(transaction : Transaction): boolean;
		singleSig(publicKey : PublicKey, signature : Signature): /* SignatureProof.+SignatureProof */ any;
		multiSig(signerKey : PublicKey, publicKeys : SignatureProof.MultiSig1, signature : Signature): SignatureProof;
		unserialize(buf : SerialBuffer): SignatureProof;
		_merklePath : MerklePath;
}
declare interface BasicTransaction extends Transaction {
		new (senderPubKey : PublicKey, recipient : Address, value : number, fee : number, validityStartHeight : number, signature? : Signature, networkId? : number);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		senderPubKey : PublicKey;
		signature : Signature;
		unserialize(buf : SerialBuffer): Transaction;
		bannedUntil : number;
		banBackoff : number;
		failedAttempts : number;
		state : number;
		score : number;
}
declare interface ExtendedTransaction extends Transaction {
		new (sender : Address, senderType : number | /* Account.Type */ any, recipient : Address, recipientType : number | /* Account.Type */ any, value : number, fee : number, validityStartHeight : number, flags : number, data : Float32Array, proof? : Float32Array, networkId? : number);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		unserialize(buf : SerialBuffer): Transaction;
		bannedUntil : number;
		banBackoff : number;
		failedAttempts : number;
		state : number;
		score : number;
		_value : number;
		_fee : number;
		_networkId : number;
		_validityStartHeight : number;
		_flags : number;
}
declare interface TransactionsProof {
		new (transactions : Array<any>, proof : MerkleProof);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		root(): Hash;
		length : number;
		transactions : Array<Transaction>;
		proof : MerkleProof;
		unserialize(buf : SerialBuffer): TransactionsProof;
		_transactions : Array<Transaction>;
		_proof : MerkleProof;
}
declare interface TransactionCache {
		new (transactionHashes : InclusionHashSet, blockOrder? : Array</* TransactionCache._blockOrder.<i> */ any>);
		containsTransaction(transaction : Transaction): boolean;
		pushBlock(block : Block): void;
		shiftBlock(): void;
		revertBlock(block : Block): /* !this.missingBlocks */ any;
		prependBlocks(blocks : TransactionCache.prototype.PrependBlocks0, param2 : Block]): void;
		missingBlocks : number;
		clone(): TransactionCache;
		isEmpty(): boolean;
	head : {
				transactionHashes : Array<Hash>;
				hash : Hash;
				prevHash : Hash;
	}
		tail : /* TransactionCache.prototype.head */ any;
		transactions : InclusionHashSet;
		_getBlockDescriptor(block : /* IBlockchain.prototype.head */ any): /* TransactionCache._blockOrder.<i> */ any;
		_transactionHashes : InclusionHashSet;
		_blockOrder : Array</* TransactionCache._blockOrderI */ any>;
}
declare interface TransactionStoreEntry {
		new (transactionHash : Hash, sender : Address, recipient : Address, blockHeight : number, blockHash : Hash, index : number);
		toJSON(): TransactionStoreEntry.prototype.ToJSONRet;
		blockHeight : number;
		index : number;
		transactionHash : Hash;
		sender : Address;
		recipient : Address;
		blockHash : Hash;
		fromBlock(block : Block): TransactionStoreEntry.FromBlockRet;
		fromJSON(id : string, o : TransactionStoreEntry.FromJSON1): /* TransactionStoreEntry.+TransactionStoreEntry */ any;
		_blockHeight : number;
		_index : number;
}
declare interface TransactionStore {
		new (store : any);
		_getCurrentId(tx? : any): void;
		_setCurrentId(id : number, tx? : any): Promise;
		_idForHash(transactionHash : Hash, tx? : any): void;
		get(transactionHash : Hash): void;
		getBySender(sender : Address, limit? : number): TransactionStore.prototype.GetBySenderRet;
		getByRecipient(recipient : Address, limit? : number): TransactionStore.prototype.GetByRecipientRet;
		put(block : Block): Promise;
		remove(block : Block): Promise;
		snapshot(tx? : TransactionStore): TransactionStore;
		transaction(enableWatchdog? : boolean): TransactionStore;
		truncate(): Promise;
		commit(): void;
		abort(): Promise;
		tx : Transaction;
		initPersistent(jdb : ConsensusDB): void;
		getPersistent(jdb : ConsensusDB): TransactionStore;
		createVolatile(): TransactionStore;
		CURRENT_ID_KEY : number;
}
declare interface TransactionStoreCodec {
		new ();
		encode(obj : any): any;
		decode(obj : any, key : string): any;
}
declare interface TransactionReceipt {
		new (transactionHash : Hash, blockHash : Hash, blockHeight : number);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		blockHeight : number;
		transactionHash : Hash;
		blockHash : Hash;
		unserialize(buf : SerialBuffer): TransactionReceipt;
		_blockHeight : number;
}
declare interface Block {
		new (header : BlockHeader, interlink : BlockInterlink, body? : BlockBody);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		verify(time : Time): /* !this._valid */ any;
		_verify(timeNow : number): boolean;
		_verifyInterlink(): boolean;
		_verifyBody(): boolean;
		isImmediateSuccessorOf(predecessor : Block): boolean;
		isInterlinkSuccessorOf(predecessor : Block): boolean;
		isSuccessorOf(predecessor : Block): void;
		getNextInterlink(nextTarget : any, nextVersion? : number): BlockInterlink;
		shallowCopy(): Block;
		equals(o : Block): boolean;
		isLight(): boolean;
		isFull(): boolean;
		toLight(): /* !this */ any;
		toFull(body : BlockBody): /* !this */ any;
		version : number;
		nBits : number;
		height : number;
		timestamp : number;
		nonce : number;
		transactions : Array<Transaction>;
		transactionCount : number;
		hash(buf? : SerialBuffer): Hash;
		pow(buf? : SerialBuffer): Hash;
		prevHash : Hash;
		bodyHash : Hash;
		accountsHash : Hash;
		target : any;
		difficulty : any;
		minerAddr : Address;
		header : BlockHeader;
		interlink : BlockInterlink;
		body : BlockBody;
		unserialize(buf : SerialBuffer): Block;
		TIMESTAMP_DRIFT_MAX : number;
		_header : BlockHeader;
		_interlink : BlockInterlink;
		_body : BlockBody;
}
declare interface LogNative {
		new ();
		isLoggable(tag : string | {}, level : /* Log.Level */ any): boolean;
		setLoggable(tag : string, level : /* Log.Level */ any): void;
		msg(level : /* Log.Level */ any, tag : string | {}, args : Array<string>): void;
		_global_level : number;
	_tag_levels : {
	}
}
declare interface BaseChain extends IBlockchain {
		new (store : ChainDataStore);
		getBlock(hash : Hash, includeForks? : boolean, includeBody? : boolean): void;
		getRawBlock(hash : Hash, includeForks? : boolean): Float32Array;
		getBlockAt(height : number, includeBody? : boolean): void;
		getNearestBlockAt(height : number, lower? : boolean): Block;
		getSuccessorBlocks(block : Block): BaseChain.prototype.GetSuccessorBlocksRet;
		getBlockLocators(): BaseChain.prototype.GetBlockLocatorsRet;
		getNextTarget(block? : Block, next? : Block): any;
		_getChainProof(): ChainProof;
		_prove(m : number, k : number, delta : number): ChainProof;
		_getSuperChain(depth : number, headData : any, tailHeight? : number): void;
		_getHeaderChain(length : number, head? : Block): HeaderChain;
		_extendChainProof(proof : ChainProof, header : BlockHeader, failOnBadness? : boolean): ChainProof;
		_getBlockProof(blockToProve : Block, knownBlock : Block): BlockChain;
		_isGoodSuperChain(superchain : /* BaseChain._isGoodSuperChain0 */ any, depth : number, m : number, delta : number): boolean;
		_hasSuperQuality(superchain : /* BaseChain._hasSuperQuality0 */ any, depth : number, m : number, delta : number): boolean;
		_hasMultiLevelQuality(superchain : /* BaseChain._hasMultiLevelQuality0 */ any, depth : number, k1 : number, delta : number): boolean;
		_isLocallyGood(superLength : number, underlyingLength : number, depth : number, delta : number): boolean;
		manyPow(headers : BaseChain.ManyPow0): void;
		isBetterProof(proof1 : ChainProof, proof2 : ChainProof, m : number): boolean;
		_getProofScore(chain : any, lca : Block, m : number): number;
	MultilevelStrategy : {
				STRICT : number;
				MODERATE : number;
				RELAXED : number;
	}
		MULTILEVEL_STRATEGY : number;
}
declare interface BlockChain {
		new (blocks : Array<Block>, superChains? : {} | Array<BlockChain>);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		verify(): boolean;
		denseSuffix(): BlockChain.prototype.DenseSuffixRet;
		getSuperChains(): /* !this._chains */ any;
		isAnchored(): boolean;
		length : number;
		totalDifficulty(): number;
	blocks : {
	}
		tail : Block;
		head : Block;
		merge(chain1 : BlockChain, chain2 : BlockChain): BlockChain;
		lowestCommonAncestor(chain1 : BlockChain, chain2 : BlockChain): Block;
		unserialize(buf : SerialBuffer): BlockChain;
		_blocks : Array<Block>;
}
declare interface HeaderChain {
		new (headers : Array<BlockHeader>);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		verify(): boolean;
		length : number;
		totalDifficulty(): any;
	headers : {
	}
		head : BlockHeader;
		tail : BlockHeader;
		unserialize(buf : SerialBuffer): HeaderChain;
		_headers : Array<BlockHeader>;
}
declare interface ChainProof {
		new (prefix : BlockChain, suffix : HeaderChain);
		serialize(buf : SerialBuffer): SerialBuffer;
		serializedSize : number;
		verify(): boolean;
		_verifyDifficulty(): boolean;
		head : BlockHeader;
		prefix : BlockChain;
		suffix : HeaderChain;
		unserialize(buf : SerialBuffer): ChainProof;
		_prefix : BlockChain;
		_suffix : HeaderChain;
}
declare interface ChainData {
		new (head : Block, totalDifficulty : any, totalWork : any, superBlockCounts : SuperBlockCounts, onMainChain? : boolean, mainChainSuccessor? : Hash);
		toObj(): ChainData.prototype.ToObjRet;
		shallowCopy(): ChainData;
		nextChainData(block : Block): ChainData;
		previousChainData(block : Block): ChainData;
		onMainChain : boolean;
		head : Block;
		totalDifficulty : any;
		totalWork : any;
		mainChainSuccessor : Hash;
		superBlockCounts : SuperBlockCounts;
		initial(block : Block, superBlockCounts? : SuperBlockCounts): ChainData;
		fromObj(obj : ChainData.FromObj0, hashBase64? : string): ChainData;
		_superBlockCounts : SuperBlockCounts;
		_onMainChain : boolean;
		_height : number;
}
declare interface SuperBlockCounts {
		new (array : Array<number>);
		add(depth : number): void;
		subtract(depth : number): void;
		copyAndAdd(depth : number): SuperBlockCounts;
		copyAndSubtract(depth : number): SuperBlockCounts;
		get(depth : number): /* !this._arr.<i> */ any;
		getCandidateDepth(m : number): number;
		length : number;
		array : Array<number>;
		_arr : Array<number>;
}
declare interface ChainDataStore {
		new (chainStore : any, blockStore : any);
		getChainData(key : Hash, includeBody? : boolean): ChainData;
		putChainData(key : Hash, chainData : ChainData, includeBody? : boolean): /* ChainDataStore.prototype.+Promise */ any;
		putChainDataSync(key : Hash, chainData : ChainData | {}, includeBody? : boolean): any;
		getBlock(key : Hash, includeBody? : boolean): Block;
		getRawBlock(key : Hash, includeForks? : boolean): Float32Array;
		getChainDataCandidatesAt(height : number): ChainDataStore.prototype.GetChainDataCandidatesAtRet;
		getChainDataAt(height : number, includeBody? : boolean): ChainData;
		getBlockAt(height : number, includeBody? : boolean): void;
		getSuccessorBlocks(block : Block): Array<any>;
		getNearestBlockAt(height : number, lower? : boolean): Block;
		getBlocks(startBlockHash : Hash, count? : number, forward? : boolean): /* ChainDataStore.prototype.+Promise */ any;
		getBlocksForward(startBlockHash : Hash, count : number): ChainDataStore.prototype.GetBlocksForwardRet;
		getBlocksBackward(startBlockHash : Hash, count : number, includeBody : boolean): ChainDataStore.prototype.GetBlocksBackwardRet;
		getHead(): Hash;
		setHead(key : Hash): void;
		setHeadSync(key : Hash): any;
		transaction(enableWatchdog? : boolean): ChainDataStore;
		synchronousTransaction(enableWatchdog? : boolean): ChainDataStore;
		commit(): any;
		abort(): any;
		snapshot(): ChainDataStore;
		truncate(): any;
		txs : Array</* ?,? */ any>;
		initPersistent(jdb : ConsensusDB): void;
		getPersistent(jdb : ConsensusDB): ChainDataStore;
		createVolatile(): ChainDataStore;
		_createIndexes(chainStore : any): void;
		CHAINDATA_CACHING_ENABLED : boolean;
		CHAINDATA_CACHE_SIZE : number;
		BLOCKS_CACHING_ENABLED : boolean;
		BLOCKS_CACHE_SIZE : number;
		BLOCKS_RAW_CACHE_SIZE : number;
}
declare interface ChainDataStoreCodec {
		new ();
		encode(obj : any): any;
		decode(obj : any, key : string): any;
}
declare interface BlockStoreCodec {
		new ();
		encode(obj : any): void;
		decode(obj : any, key : string): Block;
}
declare interface MempoolTransactionSet {
		new (sortedTransactions? : Array<any>);
		add(transaction : Transaction): /* MempoolTransactionSet.prototype.+MempoolTransactionSet */ any;
		remove(transaction : Transaction): /* !this */ any;
		copyAndAdd(transaction : Transaction): MempoolTransactionSet;
		length : number;
		numBelowFeePerByte(feePerByte : number): number;
	transactions : {
	}
		sender : Address;
		_transactions : SortedList;
}
declare interface Mempool extends Observable {
		new (blockchain : FullChain, accounts : Accounts);
		pushTransaction(transaction : Transaction): Promise;
		_pushTransaction(transaction : Transaction): number;
		_popLowFeeTransaction(): void;
		_removeTransaction(transaction : Transaction): void;
		getTransaction(hash : Hash): Transaction;
		transactionGenerator(fn*(maxSize? : /* number,minFeePerByte?:number) */ any): Transaction;
		getTransactions(maxSize? : number, minFeePerByte? : number): Array<any>;
		getTransactionsForBlock(maxSize : number): Array<any>;
		getPendingTransactions(address : Address): Mempool.prototype.GetPendingTransactionsRet;
		getTransactionsBySender(address : Address): Mempool.prototype.GetTransactionsBySenderRet;
		getTransactionsByRecipient(address : Address): Mempool.prototype.GetTransactionsByRecipientRet;
		getTransactionsByAddresses(addresses : Mempool.prototype.GetTransactionsByAddresses0, maxTransactions? : number): Mempool.prototype.GetTransactionsByAddressesRet;
		evictBelowMinFeePerByte(minFeePerByte : number): void;
		_restoreTransactions(blocks : any): Promise;
		_evictTransactions(): Promise;
		__evictTransactions(): Promise;
		length : number;
		queue : Synchronizer;
		TRANSACTION_RELAY_FEE_MIN : number;
		TRANSACTIONS_PER_SENDER_MAX : number;
		FREE_TRANSACTIONS_PER_SENDER_MAX : number;
		SIZE_MAX : number;
	ReturnCode : {
				FEE_TOO_LOW : number;
				INVALID : number;
				ACCEPTED : number;
				KNOWN : number;
	}
		_blockchain : LightChain;
}
declare interface InvRequestManager {
		new ();
		askToRequestVector(agent : any, vector : any): void;
		_request(vector : any): void;
		noteVectorNotReceived(agent : any, vector : any): void;
		noteVectorReceived(vector : InvVector): void;
		MAX_TIME_PER_VECTOR : number;
		MAX_INV_MANAGED : number;
}
declare interface BaseConsensusAgent extends Observable {
		new (time : Time, peer : /* NanoConsensusAgent._peer */ any, invRequestManager : InvRequestManager, targetSubscription? : Subscription);
		_requestHead(): void;
		onHeadUpdated(): void;
		_onGetHead(msg : any): void;
		_onHead(msg : any): void;
		subscribe(subscription : Subscription): void;
		_subscribeTarget(): void;
		_subscribe(subscription : Subscription): void;
		relayBlock(block : Block): boolean;
		_sendWaitingInvVectors(): void;
		_sendFreeWaitingInvVectors(): void;
		relayTransaction(transaction : Transaction): boolean;
		removeTransaction(transaction : Transaction): void;
		knowsBlock(blockHash : Hash): boolean;
		_onSubscribe(msg : any): void;
		_onInv(msg : any): Promise;
		__onInv(msg : any): void;
		requestVector(...vector : InvVector): void;
		_shouldRequestData(vector : any): boolean;
		_getBlock(hash : Hash, includeForks? : boolean, includeBody? : boolean): void;
		_getRawBlock(hash : Hash, includeForks? : boolean): void;
		_getTransaction(hash : Hash): Transaction;
		_onNewBlockAnnounced(hash : Hash): any;
		_onKnownBlockAnnounced(hash : Hash, block : Block): any;
		_onNewTransactionAnnounced(hash : Hash): any;
		_onKnownTransactionAnnounced(hash : Hash, transaction : Transaction): any;
		_requestData(): any;
		_doRequestData(vectors : Array<any>): any;
		_onBlock(msg : any): void;
		_processBlock(hash : Hash, block : Block): void;
		_onHeader(msg : any): void;
		_processHeader(hash : Hash, header : BlockHeader): void;
		_onTx(msg : any): Promise;
		_processTransaction(hash : Hash, transaction : Transaction): void;
		_onNotFound(msg : any): any;
		_onObjectReceived(vector : InvVector): any;
		_noMoreData(): any;
		_onNoUnknownObjects(): any;
		_onAllObjectsReceived(): any;
		_onObjectProcessed(vector : InvVector): any;
		_onAllObjectsProcessed(): any;
		_onGetData(msg : any): void;
		_onGetHeader(msg : any): Promise;
		getBlockProof(blockHashToProve : Hash, knownBlock : Block): Promise;
		_getBlockProof(blockHashToProve : Hash, knownBlock : Block): /* BaseConsensusAgent.prototype.+Promise */ any;
		_onBlockProof(msg : any): void;
		getTransactionsProof(block : Block, addresses : BaseConsensusAgent.prototype.GetTransactionsProof1): Promise;
		_getTransactionsProof(block : Block, addresses : /* BaseConsensusAgent.prototype._getTransactionsProof1 */ any): /* BaseConsensusAgent.prototype.+Promise */ any;
		_onTransactionsProof(msg : any): any;
		getTransactionReceipts(address : Address): Promise;
		_getTransactionReceipts(address : Address): /* BaseConsensusAgent.prototype.+Promise */ any;
		_onTransactionReceipts(msg : any): any;
		_onClose(): any;
		synced : boolean;
		syncing : boolean;
	peer : {
				peerAddress : Address;
	}
		onmessage : /* ArrayBuffer.onmessage */ any;
		onclose : /* ArrayBuffer.onclose */ any;
		onerror : /* ArrayBuffer.onerror */ any;
		netAddress : NetAddress;
		REQUEST_THRESHOLD : number;
		REQUEST_THROTTLE : number;
		REQUEST_TIMEOUT : number;
		REQUEST_TRANSACTIONS_WAITING_MAX : number;
		REQUEST_BLOCKS_WAITING_MAX : number;
		BLOCK_PROOF_REQUEST_TIMEOUT : number;
		TRANSACTIONS_PROOF_REQUEST_TIMEOUT : number;
		TRANSACTION_RECEIPTS_REQUEST_TIMEOUT : number;
		TRANSACTION_RELAY_INTERVAL : number;
		TRANSACTIONS_AT_ONCE : number;
		TRANSACTIONS_PER_SECOND : number;
		FREE_TRANSACTION_RELAY_INTERVAL : number;
		FREE_TRANSACTIONS_AT_ONCE : number;
		FREE_TRANSACTIONS_PER_SECOND : number;
		FREE_TRANSACTION_SIZE_PER_INTERVAL : number;
		TRANSACTION_RELAY_FEE_MIN : number;
		SUBSCRIPTION_CHANGE_GRACE_PERIOD : number;
		HEAD_REQUEST_INTERVAL : number;
		KNOWN_OBJECTS_COUNT_MAX : number;
		_synced : boolean;
		_lastSubscriptionChange : number;
	_blockProofRequest : {
				resolve(value : any): void;
				blockHashToProve : Hash;
				knownBlock : Block;
				reject : /* Promise.reject */ any;
	}
	_transactionsProofRequest : {
				addresses : Array<Address>;
				resolve(value : any): void;
				block : Block;
				reject : /* Promise.reject */ any;
	}
	_transactionReceiptsRequest : {
				resolve(value : any): void;
				address : Address;
				reject : /* Promise.reject */ any;
	}
}
declare interface FreeTransactionVector {
		new (inv : InvVector, serializedSize : number);
		hashCode(): string;
		inv : InvVector;
		serializedSize : number;
}
declare interface BaseConsensus extends Observable {
		new (blockchain : any, mempool : any, network : Network);
		subscribe(subscription : Subscription): void;
		_newConsensusAgent(peer : /* NanoConsensusAgent._peer */ any): /* BaseConsensus.prototype.+BaseConsensusAgent */ any;
		_onPeerJoined(peer : /* NanoConsensusAgent._peer */ any): BaseConsensusAgent;
		_onPeerLeft(peer : /* NanoConsensusAgent._peer */ any): void;
		_syncBlockchain(): void;
		_onPeerSynced(peer : /* NanoConsensusAgent._peer */ any): void;
		_onPeerOutOfSync(peer : /* NanoConsensusAgent._peer */ any): void;
		_onHeadChanged(head : any): void;
		_onTransactionAdded(tx : any): void;
		_onTransactionRemoved(tx : any): void;
		_requestBlockProof(blockHashToProve : Hash, blockHeightToProve : number): Block;
		_requestTransactionsProof(addresses : /* BaseConsensus.prototype._requestTransactionsProof0 */ any, block? : Block): /* BaseConsensus.prototype._requestTransactionsProofRet */ any;
		_requestTransactionReceipts(address : Address): void;
		_requestTransactionHistory(address : Address): void;
		established : boolean;
		network : Network;
		_established : boolean;
		invRequestManager : InvRequestManager;
		SYNC_THROTTLE : number;
		MIN_FULL_NODES : number;
}
declare interface FullChain extends BaseChain {
		new (store : ChainDataStore, accounts : Accounts, time : Time, transactionStore? : TransactionStore): FullChain;
		_init(): /* !this */ any;
		pushBlock(block : Block): Promise;
		_pushBlock(block : Block): number;
		_verifyInterlink(block : Block): boolean;
		_extend(blockHash : Hash, chainData : ChainData, prevData : ChainData): boolean;
		_shouldExtendChainProof(): boolean;
		_rebranch(blockHash : Hash, chainData : ChainData): boolean;
		getBlocks(startBlockHash : Hash, count : number, forward : boolean): Promise;
		getChainProof(): Promise;
		getBlockProof(blockToProve : Block, knownBlock : Block): Promise;
		getAccountsTreeChunk(blockHash : Hash, startPrefix : string): void;
		getAccountsProof(blockHash : Hash, addresses : FullChain.prototype.GetAccountsProof1): void;
		getTransactionsProof(blockHash : Hash, addresses : FullChain.prototype.GetTransactionsProof1): TransactionsProof;
		getTransactionReceiptsByAddress(address : Address, limit? : number): FullChain.prototype.GetTransactionReceiptsByAddressRet;
		getTransactionInfoByHash(transactionHash : Hash): void;
		_getSnapshot(blockHash : Hash): Promise;
		_saveSnapshot(blockHash : Hash): void;
		height : number;
		blockForkedCount : number;
		blockRebranchedCount : number;
		blockExtendedCount : number;
		blockOrphanCount : number;
		blockInvalidCount : number;
		blockKnownCount : number;
		accountsHash(): void;
		head : Block;
		headHash : Hash;
		totalDifficulty : any;
		totalWork : any;
		accounts : Accounts;
		transactionCache : TransactionCache;
		queue : PrioritySynchronizer;
		getPersistent(jdb : ConsensusDB, accounts : Accounts, time : Time, transactionStore? : TransactionStore): FullChain;
		createVolatile(accounts : Accounts, time : Time, transactionStore? : TransactionStore): FullChain;
		ERR_ORPHAN : number;
		ERR_INVALID : number;
		OK_KNOWN : number;
		OK_EXTENDED : number;
		OK_REBRANCHED : number;
		OK_FORKED : number;
		SYNCHRONIZER_THROTTLE_AFTER : number;
		SYNCHRONIZER_THROTTLE_WAIT : number;
		_snapshotOrder : Array<Hash>;
		_blockForkedCount : number;
		_blockRebranchedCount : number;
		_blockExtendedCount : number;
		_blockOrphanCount : number;
		_blockInvalidCount : number;
		_blockKnownCount : number;
}
declare interface FullConsensusAgent extends BaseConsensusAgent {
		new (blockchain : FullChain, mempool : Mempool, time : Time, peer : /* NanoConsensusAgent._peer */ any, invRequestManager : InvRequestManager, targetSubscription : Subscription);
		syncBlockchain(): void;
		_syncFinished(): void;
		_requestBlocks(maxInvSize : number): void;
		_shouldRequestData(vector : any): boolean;
		_getBlock(hash : Hash, includeForks? : boolean, includeBody? : boolean): void;
		_getRawBlock(hash : Hash, includeForks? : boolean): Float32Array;
		_getTransaction(hash : Hash): Transaction;
		_onKnownBlockAnnounced(hash : Hash, block : Block): any;
		_onNoUnknownObjects(): any;
		_onAllObjectsReceived(): void;
		_onHeader(msg : any): void;
		_processBlock(hash : Hash, block : Block): void;
		_onOrphanBlock(hash : Hash, block : Block): void;
		_outOfSync(): void;
		_processTransaction(hash : Hash, transaction : Transaction): boolean;
		_onAllObjectsProcessed(): void;
		_onGetBlocks(msg : any): Promise;
		_onGetChainProof(msg : any): void;
		_onGetBlockProof(msg : any): void;
		_onGetAccountsProof(msg : any): void;
		_onGetTransactionsProof(msg : any): void;
		_onGetAccountsTreeChunk(msg : any): void;
		_onGetTransactions(msg : any): void;
		_onMempool(msg : any): Promise;
		syncing : boolean;
		_syncing : boolean;
		_synced : boolean;
		_numBlocksExtending : number;
		_numBlocksForking : number;
		_failedSyncs : number;
		_lastSubscriptionChange : number;
		_localSubscription : Subscription;
		_syncTarget : Hash;
		onmessage : /* ArrayBuffer.onmessage */ any;
		onclose : /* ArrayBuffer.onclose */ any;
		onerror : /* ArrayBuffer.onerror */ any;
		netAddress : NetAddress;
		SYNC_ATTEMPTS_MAX : number;
		GETBLOCKS_VECTORS_MAX : number;
		RESYNC_THROTTLE : number;
		MEMPOOL_DELAY_MIN : number;
		MEMPOOL_DELAY_MAX : number;
		MEMPOOL_THROTTLE : number;
		MEMPOOL_ENTRIES_MAX : number;
		CHAIN_PROOF_RATE_LIMIT : number;
		ACCOUNTS_PROOF_RATE_LIMIT : number;
		ACCOUNTS_TREE_CHUNK_RATE_LIMIT : number;
		TRANSACTION_PROOF_RATE_LIMIT : number;
		TRANSACTION_RECEIPTS_RATE_LIMIT : number;
		BLOCK_PROOF_RATE_LIMIT : number;
		GET_BLOCKS_RATE_LIMIT : number;
}
declare interface FullConsensus extends BaseConsensus {
		new (blockchain : FullChain, mempool : Mempool, network : Network);
		subscribeMinFeePerByte(minFeePerByte : number): void;
		_newConsensusAgent(peer : /* NanoConsensusAgent._peer */ any): BaseConsensusAgent;
		blockchain : NanoChain;
		mempool : Mempool;
		_mempool : Mempool;
	_network : {
				allowInboundConnections : boolean;
	}
		_established : boolean;
}
declare interface LightChain extends FullChain {
		new (store : ChainDataStore, accounts : Accounts, time : Time): any;
		_init(): /* !this */ any;
		partialChain(): PartialLightChain;
		_shouldExtendChainProof(): boolean;
		getPersistent(jdb : ConsensusDB, accounts : Accounts, time : Time): LightChain;
		createVolatile(accounts : Accounts, time : Time): LightChain;
		_accounts : Accounts;
		_snapshotOrder : Array<Hash>;
		_mainChain : ChainData;
		_transactionCache : TransactionCache;
		_transactionStore : TransactionStore;
		_synchronizer : PrioritySynchronizer;
		_blockForkedCount : number;
		_blockRebranchedCount : number;
		_blockExtendedCount : number;
		_blockOrphanCount : number;
		_blockInvalidCount : number;
		_blockKnownCount : number;
		_store : ChainDataStore;
}
declare interface LightConsensusAgent extends FullConsensusAgent {
		new (blockchain : LightChain, mempool : Mempool, time : Time, peer : /* NanoConsensusAgent._peer */ any, invRequestManager : InvRequestManager, targetSubscription : Subscription);
		syncBlockchain(): void;
		_initChainProofSync(): void;
		_syncFinished(): any;
		_applyOrphanedBlocks(): void;
		_requestChainProof(): any;
		_onChainProof(msg : any): void;
		_requestAccountsTree(): void;
		_onAccountsTreeChunk(msg : any): void;
		_requestProofBlocks(): void;
		_requestBlocks(): void;
		_processBlock(hash : Hash, block : Block): void;
		_onKnownBlockAnnounced(hash : Hash, block : Block): any;
		_onOrphanBlock(hash : Hash, block : Block): void;
		getHeader(hash : Hash): /* LightConsensusAgent.prototype.+Promise */ any;
		_onHeader(msg : any): any;
		_onClose(): any;
		syncing : boolean;
		_chain : LightChain;
		CHAINPROOF_REQUEST_TIMEOUT : number;
		CHAINPROOF_CHUNK_TIMEOUT : number;
		ACCOUNTS_TREE_CHUNK_REQUEST_TIMEOUT : number;
		SYNC_ATTEMPTS_MAX : number;
		GETBLOCKS_VECTORS_MAX : number;
		WEAK_PROOFS_MAX : number;
}
declare interface LightConsensus extends BaseConsensus {
		new (blockchain : LightChain, mempool : Mempool, network : Network);
		_newConsensusAgent(peer : /* NanoConsensusAgent._peer */ any): BaseConsensusAgent;
		_onPeerJoined(peer : /* NanoConsensusAgent._peer */ any): BaseConsensusAgent;
		blockchain : NanoChain;
		mempool : Mempool;
		_established : boolean;
}
declare interface PartialLightChain extends LightChain {
		new (store : ChainDataStore, accounts : Accounts, time : Time, proof : ChainProof, commitSynchronizer : PrioritySynchronizer): PartialLightChain;
		pushProof(proof : ChainProof): Promise;
		_pushProof(proof : ChainProof): boolean;
		_acceptProof(proof : ChainProof, suffix : /* PartialLightChain.prototype._acceptProof1 */ any): void;
		_pushLightBlock(block : Block): number;
		_pushBlockInternal(block : Block, blockHash : Hash, prevData : ChainData): number;
		_pushBlock(block : Block): number;
		_pushHeadBlock(block : Block): number;
		_pushBlockBackwards(block : Block): number;
		_prepend(blockHash : Hash, chainData : ChainData): boolean;
		pushAccountsTreeChunk(chunk : AccountsTreeChunk): number;
		_complete(): boolean;
		commit(): Promise;
		_commit(): void;
		abort(): void;
		getMissingAccountsPrefix(): /* !this._partialTree.missingPrefix */ any;
		getBlockLocators(): PartialLightChain.prototype.GetBlockLocatorsRet;
		numBlocksNeeded(): number;
		needsMoreBlocks(): boolean;
		proofHeadHeight : number;
	State : {
				WEAK_PROOF : number;
				ABORTED : number;
				PROVE_CHAIN : number;
				PROVE_ACCOUNTS_TREE : number;
				PROVE_BLOCKS : number;
				COMPLETE : number;
	}
		_partialTree : PartialAccountsTree;
		_snapshotOrder : Array<Hash>;
	_mainChain : {
				onMainChain : boolean;
	}
		_blockForkedCount : number;
		_blockRebranchedCount : number;
		_blockExtendedCount : number;
		_blockOrphanCount : number;
		_blockInvalidCount : number;
		_blockKnownCount : number;
}
declare interface NanoChain extends BaseChain {
		new (time : Time): NanoChain;
		_init(): /* !this */ any;
		pushProof(proof : ChainProof): Promise;
		_pushProof(proof : ChainProof): boolean;
		_acceptProof(proof : ChainProof, suffix : /* NanoChain.prototype._acceptProof1 */ any): void;
		_pushBlock(block : Block): number;
		pushHeader(header : BlockHeader): Promise;
		_pushHeader(header : BlockHeader): number;
		_pushBlockInternal(block : Block, blockHash : Hash, prevData : ChainData): number;
		_rebranch(blockHash : Hash, chainData : ChainData): Promise;
		getChainProof(): Promise;
		height : number;
		head : Block;
		headHash : Hash;
		ERR_ORPHAN : number;
		ERR_INVALID : number;
		OK_KNOWN : number;
		OK_EXTENDED : number;
		OK_REBRANCHED : number;
		OK_FORKED : number;
		SYNCHRONIZER_THROTTLE_AFTER : number;
		SYNCHRONIZER_THROTTLE_WAIT : number;
		_proof : ChainProof;
}
declare interface NanoConsensusAgent extends BaseConsensusAgent {
		new (blockchain : NanoChain, mempool : NanoMempool, time : Time, peer : /* NanoConsensusAgent._peer */ any, invRequestManager : InvRequestManager, targetSubscription : Subscription);
		syncBlockchain(): void;
		requestMempool(): void;
		_syncFinished(): any;
		_requestChainProof(): any;
		_onChainProof(msg : any): void;
		_applyOrphanedBlocks(): void;
		_doRequestData(vectors : /* NanoConsensusAgent.prototype._doRequestData0 */ any): any;
		_getBlock(hash : Hash, includeForks? : boolean): void;
		_getTransaction(hash : Hash): Transaction;
		_processHeader(hash : Hash, header : BlockHeader): void;
		_processTransaction(hash : Hash, transaction : Transaction): boolean;
		_onGetChainProof(msg : any): void;
		getAccounts(blockHash : Hash, addresses : NanoConsensusAgent.prototype.GetAccounts1): Promise;
		_getAccounts(blockHash : Hash, addresses : /* NanoConsensusAgent.prototype._getAccounts1 */ any): /* NanoConsensusAgent.prototype.+Promise */ any;
		_onAccountsProof(msg : any): void;
		_onClose(): any;
		syncing : boolean;
		CHAINPROOF_REQUEST_TIMEOUT : number;
		CHAINPROOF_CHUNK_TIMEOUT : number;
		ACCOUNTSPROOF_REQUEST_TIMEOUT : number;
		MEMPOOL_DELAY_MIN : number;
		MEMPOOL_DELAY_MAX : number;
		_blockchain : NanoChain;
		_mempool : NanoMempool;
		_syncing : boolean;
		_orphanedBlocks : Array<BlockHeader>;
	_accountsRequest : {
				addresses : Array<Address>;
				resolve(value : Array<any>): void;
				blockHash : Hash;
				reject : /* Promise.reject */ any;
	}
		_requestedChainProof : boolean;
		_time : Time;
	_peer : {
				peerAddress : Address;
	}
		_synced : boolean;
		_knownObjects : LimitInclusionHashSet;
		_blocksToRequest : UniqueQueue;
		_txsToRequest : ThrottledQueue;
		_lastSubscriptionChange : number;
		_timers : Timers;
		_synchronizer : MultiSynchronizer;
		_invRequestManager : InvRequestManager;
}
declare interface NanoConsensus extends BaseConsensus {
		new (blockchain : NanoChain, mempool : NanoMempool, network : Network);
		subscribeAccounts(addresses : Array<Address>): void;
		addSubscriptions(newAddresses : /* [? */ any | Address] | Address): void;
		removeSubscriptions(addressesToRemove : /* [? */ any | Address] | Address): void;
		_newConsensusAgent(peer : /* NanoConsensusAgent._peer */ any): BaseConsensusAgent;
		_onPeerJoined(peer : /* NanoConsensusAgent._peer */ any): BaseConsensusAgent;
		_onHeadChanged(head : Block): void;
		_onTransactionAdded(tx : Transaction): void;
		getAccount(address : Address, blockHash? : Hash): void;
		getAccounts(addresses : NanoConsensus.prototype.GetAccounts0, blockHash? : Hash): void;
		relayTransaction(transaction : Transaction): void;
		blockchain : NanoChain;
		mempool : NanoMempool;
		_established : boolean;
}
declare interface NanoMempool extends Observable {
		new (blockchain : NanoChain);
		pushTransaction(transaction : Transaction): boolean;
		getTransaction(hash : Hash): Transaction;
		getTransactions(maxCount : number): NanoMempool.prototype.GetTransactionsRet;
		getPendingTransactions(address : Address): NanoMempool.prototype.GetPendingTransactionsRet;
		changeHead(block : Block, transactions : NanoMempool.prototype.ChangeHead1): void;
		removeTransaction(transaction : Transaction): void;
		evictExceptAddresses(addresses : NanoMempool.prototype.EvictExceptAddresses0): void;
		_evictTransactions(blockHeader : BlockHeader, transactions : /* NanoMempool.prototype._evictTransactions1 */ any): void;
		length : number;
}
declare interface ConsensusDB {
		new (dbPrefix : string, light : boolean): ConsensusDB;
		_init(): /* !this */ any;
		getFull(dbPrefix? : string): void;
		getLight(dbPrefix : string): void;
		_getDbName(dbPrefix : string, light : boolean): string;
		_onUpgradeNeeded(light : boolean, oldVersion : number, newVersion : number, jdb : any): void;
		VERSION : number;
		INITIAL_DB_SIZE : number;
		MIN_RESIZE : number;
}
declare interface UpgradeHelper {
		new (): UpgradeHelper;
}

declare namespace UpgradeHelper{
		function recomputeTotals(jdb : ConsensusDB): any;
		function _recomputeTotals(transaction : ChainDataStore, block : Block, totalDifficulty : any, totalWork : any): /* UpgradeHelper.+Promise */ any;
}
declare interface Consensus {
		new (): Consensus;
}

declare namespace Consensus{
		function full(netconfig? : Consensus.Full0): /* Consensus.+FullConsensus */ any;
		function light(netconfig? : /* Consensus.full.!0 */ any): /* Consensus.+LightConsensus */ any;
		function nano(netconfig? : /* Consensus.full.!0 */ any): /* Consensus.+NanoConsensus */ any;
		function volatileFull(netconfig? : /* Consensus.full.!0 */ any): FullConsensus;
		function volatileLight(netconfig? : /* Consensus.full.!0 */ any): LightConsensus;
		function volatileNano(netconfig? : /* Consensus.full.!0 */ any): NanoConsensus;
}
declare interface Protocol {
		new (): Protocol;
}

declare namespace Protocol{
		export var DUMB : number;
		export var WSS : number;
		export var RTC : number;
		export var WS : number;
}
declare interface Message {
		new (type : /* Message.Type */ any | number);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		_setChecksum(buf : SerialBuffer): any;
		peekType(buf : SerialBuffer): number;	peekType();
		peekLength(buf : SerialBuffer): number;
		unserialize(buf : SerialBuffer): /* Message.+Message */ any;
		_writeChecksum(type : number | /* Message.Type */ any, buf : SerialBuffer, value : number): any;
		MAGIC : number;
	Type : {
				VERSION : number;
				INV : number;
				GET_DATA : number;
				GET_HEADER : number;
				NOT_FOUND : number;
				GET_BLOCKS : number;
				BLOCK : number;
				HEADER : number;
				TX : number;
				MEMPOOL : number;
				REJECT : number;
				SUBSCRIBE : number;
				ADDR : number;
				GET_ADDR : number;
				PING : number;
				PONG : number;
				SIGNAL : number;
				GET_CHAIN_PROOF : number;
				CHAIN_PROOF : number;
				GET_ACCOUNTS_PROOF : number;
				ACCOUNTS_PROOF : number;
				GET_ACCOUNTS_TREE_CHUNK : number;
				ACCOUNTS_TREE_CHUNK : number;
				GET_TRANSACTIONS_PROOF : number;
				TRANSACTIONS_PROOF : number;
				GET_TRANSACTION_RECEIPTS : number;
				TRANSACTION_RECEIPTS : number;
				GET_BLOCK_PROOF : number;
				BLOCK_PROOF : number;
				GET_HEAD : number;
				HEAD : number;
				VERACK : number;
	}
}
declare interface AddrMessage extends Message {
		new (addresses : Array<any>);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
	addresses : {
	}
		unserialize(buf : SerialBuffer): /* AddrMessage.+AddrMessage */ any;
		_addresses : Array<PeerAddress>;
}
declare interface BlockMessage extends Message {
		new (block : Block);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		block : Block;
		unserialize(buf : SerialBuffer): /* BlockMessage.+BlockMessage */ any;
}
declare interface RawBlockMessage extends Message {
		new (block : Float32Array);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		block : Block;
}
declare interface GetAddrMessage extends Message {
		new (protocolMask : number, serviceMask : number, maxResults : number);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		protocolMask : number;
		serviceMask : number;
		maxResults : number;
		unserialize(buf : SerialBuffer): /* GetAddrMessage.+GetAddrMessage */ any;
		_protocolMask : number;
		_serviceMask : number;
		_maxResults : number;
}
declare interface GetBlocksMessage extends Message {
		new (locators : Array<Hash>, maxInvSize : number, direction : /* GetBlocksMessage.Direction */ any | number);
		serialize(buf? : SerialBuffer): SerialBuffer;
		maxInvSize : number;
	locators : {
	}
		unserialize(buf : SerialBuffer): /* GetBlocksMessage.+GetBlocksMessage */ any;
	Direction : {
				FORWARD : number;
				BACKWARD : number;
	}
		LOCATORS_MAX_COUNT : number;
		_locators : Array<Hash>;
		_maxInvSize : number;
}
declare interface HeaderMessage extends Message {
		new (header : BlockHeader);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		header : BlockHeader;
		unserialize(buf : SerialBuffer): /* HeaderMessage.+HeaderMessage */ any;
}
declare interface InvVector {
		new (type : number | /* InvVector.Type */ any, hash : Hash);
		serialize(buf? : SerialBuffer): SerialBuffer;
		equals(o : InvVector): boolean;
		hashCode(): string;
		serializedSize : number;
		hash : Hash;
		fromBlock(block : Block): InvVector;
		fromHeader(header : BlockHeader): InvVector;
		fromTransaction(tx : Transaction): InvVector;
		unserialize(buf : SerialBuffer): InvVector;
	Type : {
				ERROR : number;
				TRANSACTION : number;
				BLOCK : number;
				unserialize(buf : SerialBuffer): number;		unserialize();
	}
}
declare interface BaseInventoryMessage extends Message {
		new (type : number | /* Message.Type */ any, vectors : Array<InvVector>);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
	vectors : {
	}
		VECTORS_MAX_COUNT : number;
}
declare interface InvMessage extends BaseInventoryMessage {
		new (vectors : Array<InvVector>);
		unserialize(buf : SerialBuffer): /* InvMessage.+InvMessage */ any;
		_vectors : Array<InvVector>;
}
declare interface GetDataMessage extends BaseInventoryMessage {
		new (vectors : Array<InvVector>);
		unserialize(buf : SerialBuffer): /* GetDataMessage.+GetDataMessage */ any;
}
declare interface GetHeaderMessage extends BaseInventoryMessage {
		new (vectors : Array<InvVector>);
		unserialize(buf : SerialBuffer): /* GetHeaderMessage.+GetHeaderMessage */ any;
}
declare interface NotFoundMessage extends BaseInventoryMessage {
		new (vectors : Array<InvVector>);
		unserialize(buf : SerialBuffer): /* NotFoundMessage.+NotFoundMessage */ any;
}
declare interface MempoolMessage extends Message {
		new ();
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		unserialize(buf : SerialBuffer): /* MempoolMessage.+MempoolMessage */ any;
}
declare interface PingMessage extends Message {
		new (nonce : number);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		nonce : number;
		unserialize(buf : SerialBuffer): /* PingMessage.+PingMessage */ any;
		_nonce : number;
}
declare interface PongMessage extends Message {
		new (nonce : number);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		nonce : number;
		unserialize(buf : SerialBuffer): /* PongMessage.+PongMessage */ any;
		_nonce : number;
}
declare interface RejectMessage extends Message {
		new (messageType : /* Message.Type */ any | number, code : /* RejectMessage.Code */ any | number, reason : string, extraData? : Float32Array);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		reason : string;
		extraData : Float32Array;
		unserialize(buf : SerialBuffer): /* RejectMessage.+RejectMessage */ any;
	Code : {
				REJECT_MALFORMED : number;
				REJECT_INVALID : number;
				REJECT_OBSOLETE : number;
				REJECT_DOUBLE : number;
				REJECT_DUST : number;
				REJECT_INSUFFICIENT_FEE : number;
	}
		_reason : string;
}
declare interface SignalMessage extends Message {
		new (senderId : PeerId, recipientId : PeerId, nonce : number, ttl : number, flags : number, payload? : Float32Array, senderPubKey? : PublicKey, signature? : Signature);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		verifySignature(): boolean;
		nonce : number;
		ttl : number;
		flags : number;
		hasPayload(): boolean;
		isUnroutable(): boolean;
		isTtlExceeded(): boolean;
		recipientId : PeerId;
		payload : Float32Array;
		signature : Signature;
		senderPubKey : PublicKey;
		senderId : PeerId;
		unserialize(buf : SerialBuffer): /* SignalMessage.+SignalMessage */ any;
	Flag : {
				UNROUTABLE : number;
				TTL_EXCEEDED : number;
	}
		_nonce : number;
		_ttl : number;
		_flags : number;
}
declare interface SubscribeMessage extends Message {
		new (subscription : Subscription);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		subscription : Subscription;
		unserialize(buf : SerialBuffer): /* SubscribeMessage.+SubscribeMessage */ any;
}
declare interface TxMessage extends Message {
		new (transaction : any, accountsProof? : AccountsProof);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		hasAccountsProof : boolean;
		transaction : ExtendedTransaction;
		accountsProof : AccountsProof;
		unserialize(buf : SerialBuffer): /* TxMessage.+TxMessage */ any;
}
declare interface VersionMessage extends Message {
		new (version : number, peerAddress : PeerAddress, genesisHash : Hash, headHash : Hash, challengeNonce : Float32Array);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		version : number;
		genesisHash : Hash;
		headHash : Hash;
		challengeNonce : Float32Array;
		peerAddress : PeerAddress;
		unserialize(buf : SerialBuffer): /* VersionMessage.+VersionMessage */ any;
		CHALLENGE_SIZE : number;
		_version : number;
		_peerAddress : PeerAddress;
}
declare interface VerAckMessage extends Message {
		new (publicKey : PublicKey, signature : Signature);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		publicKey : PublicKey;
		signature : Signature;
		unserialize(buf : SerialBuffer): /* VerAckMessage.+VerAckMessage */ any;
}
declare interface AccountsProofMessage extends Message {
		new (blockHash : Hash, accountsProof? : AccountsProof);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		hasProof(): boolean;
		blockHash : Hash;
		proof : AccountsProof;
		unserialize(buf : SerialBuffer): /* AccountsProofMessage.+AccountsProofMessage */ any;
}
declare interface GetAccountsProofMessage extends Message {
		new (blockHash : Hash, addresses : Array<Address>);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
	addresses : {
	}
		blockHash : Hash;
		unserialize(buf : SerialBuffer): /* GetAccountsProofMessage.+GetAccountsProofMessage */ any;
		ADDRESSES_MAX_COUNT : number;
		_addresses : Array<Address>;
}
declare interface ChainProofMessage extends Message {
		new (proof : ChainProof);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		proof : ChainProof;
		unserialize(buf : SerialBuffer): /* ChainProofMessage.+ChainProofMessage */ any;
}
declare interface GetChainProofMessage extends Message {
		new ();
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		unserialize(buf : SerialBuffer): /* GetChainProofMessage.+GetChainProofMessage */ any;
}
declare interface AccountsTreeChunkMessage extends Message {
		new (blockHash : Hash, accountsTreeChunk? : AccountsTreeChunk);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		hasChunk(): boolean;
		blockHash : Hash;
		chunk : AccountsTreeChunk;
		unserialize(buf : SerialBuffer): /* AccountsTreeChunkMessage.+AccountsTreeChunkMessage */ any;
}
declare interface GetAccountsTreeChunkMessage extends Message {
		new (blockHash : Hash, startPrefix : string);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		startPrefix : string;
		blockHash : Hash;
		unserialize(buf : SerialBuffer): /* GetAccountsTreeChunkMessage.+GetAccountsTreeChunkMessage */ any;
		_startPrefix : string;
}
declare interface TransactionsProofMessage extends Message {
		new (blockHash : Hash, proof? : TransactionsProof);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		hasProof(): boolean;
		blockHash : Hash;
		proof : TransactionsProof;
		unserialize(buf : SerialBuffer): /* TransactionsProofMessage.+TransactionsProofMessage */ any;
		_proof : TransactionsProof;
}
declare interface GetTransactionsProofMessage extends Message {
		new (blockHash : Hash, addresses : Array<Address>);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
	addresses : {
	}
		blockHash : Hash;
		unserialize(buf : SerialBuffer): /* GetTransactionsProofMessage.+GetTransactionsProofMessage */ any;
		ADDRESSES_MAX_COUNT : number;
		_addresses : Array<Address>;
}
declare interface GetTransactionReceiptsMessage extends Message {
		new (address : Address, offset? : number);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		offset : number;
		address : Address;
		unserialize(buf : SerialBuffer): /* GetTransactionReceiptsMessage.+GetTransactionReceiptsMessage */ any;
		_offset : number;
}
declare interface TransactionReceiptsMessage extends Message {
		new (receipts? : Array<TransactionReceipt>);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		hasReceipts(): boolean;
	receipts : {
	}
		unserialize(buf : SerialBuffer): /* TransactionReceiptsMessage.+TransactionReceiptsMessage */ any;
		RECEIPTS_MAX_COUNT : number;
		_receipts : Array</* TransactionReceiptsMessage.+TransactionReceipt */ any>;
}
declare interface GetBlockProofMessage extends Message {
		new (blockHashToProve : Hash, knownBlockHash : Hash);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		blockHashToProve : Hash;
		knownBlockHash : Hash;
		unserialize(buf : SerialBuffer): /* GetBlockProofMessage.+GetBlockProofMessage */ any;
}
declare interface BlockProofMessage extends Message {
		new (proof? : BlockChain);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		hasProof(): boolean;
		proof : BlockChain;
		unserialize(buf : SerialBuffer): /* BlockProofMessage.+BlockProofMessage */ any;
}
declare interface GetHeadMessage extends Message {
		new ();
		serialize(buf? : SerialBuffer): SerialBuffer;
		unserialize(buf : SerialBuffer): /* GetHeadMessage.+GetHeadMessage */ any;
}
declare interface HeadMessage extends Message {
		new (header : BlockHeader);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		header : BlockHeader;
		unserialize(buf : SerialBuffer): /* HeadMessage.+HeadMessage */ any;
}
declare interface MessageFactory {
		new (): MessageFactory;
}

declare namespace MessageFactory{
		function peekType(buf : SerialBuffer): number;	function peekType();
		function parse(buf : SerialBuffer): any;
	var CLASSES : {
	}
}
declare interface WebRtcConnector extends Observable {
		new (networkConfig : NetworkConfig);
		connect(peerAddress : PeerAddress, signalChannel : any): boolean;
		isValidSignal(msg : SignalMessage): boolean;
		onSignal(channel : PeerChannel, msg : SignalMessage): void;
		_onConnection(conn : any, peerId : PeerId): void;
		_onClose(peerId : PeerId): void;
		CONNECT_TIMEOUT : number;
}
declare interface PeerConnector extends Observable {
		new (networkConfig : NetworkConfig, signalChannel : PeerChannel, peerId : PeerId, peerAddress : PeerAddress);
		onSignal(signal : any): void;
		_onConnectionStateChange(e : any): void;
		_onClose(): void;
		_addIceCandidate(signal : any): any;
		_handleCandidateQueue(): void;
		_signal(signal : /* PeerConnector.prototype._signal0 */ any): void;
		_onIceCandidate(event : any): void;
		_onIceGatheringStateChange(event : any): void;
		_onDescription(description : any): void;
		_onDataChannel(event : any): void;
		nonce : number;
	rtcConnection : {
				onicecandidate(e : any): void;
				onconnectionstatechange(e : any): void;
				onicegatheringstatechange(e : any): void;
	}
		peerAddress : PeerAddress;
}
declare interface OutboundPeerConnector extends PeerConnector {
		new (webRtcConfig : NetworkConfig, peerAddress : PeerAddress, signalChannel : any);
		_onClose(): void;
}
declare interface InboundPeerConnector {
		new (webRtcConfig : NetworkConfig, signalChannel : PeerChannel, peerId : PeerId, offer : any): InboundPeerConnector;
}

declare interface WebRtcDataChannel extends DataChannel {
		new (nativeChannel : /* WebRtcDataChannel.!0 */ any);
		_onMessage(msg : ArrayBuffer): void;
		sendChunk(msg : any): void;
		close(): void;
		_onClose(): void;
}
declare interface WebRtcUtils {
		new (): WebRtcUtils;
}

declare namespace WebRtcUtils{
		function candidateToNetAddress(candidate : any): NetAddress;
}
declare interface WebSocketConnector extends Observable {
		new (protocol : number, protocolPrefix : string, networkConfig : NetworkConfig);
		connect(peerAddress : PeerAddress): boolean;
		abort(peerAddress : PeerAddress | /* PeerChannel.peerAddress */ any | Abort0): any;
		_onConnection(ws : any, req : any): any;
		CONNECT_TIMEOUT : number;
		_protocol : number;
		_protocolPrefix : string;
}
declare interface WebSocketDataChannel extends DataChannel {
		new (ws : any);
		close(): void;
		sendChunk(msg : Float32Array): void;
}
declare interface NetAddress {
		new (type : number | /* NetAddress.Type */ any, ipArray : Float32Array, reliable : boolean);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		equals(o : NetAddress): boolean;
		hashCode(): string;
		reliable : boolean;
		isPseudo(): boolean;
		isPrivate(): boolean;
		isIPv6(): /* !this._ip */ any;
		isIPv4(): /* !this._ip */ any;
		subnet(bitCount : number): NetAddress;
		ip : Float32Array;
		fromIP(ip : string, reliable : boolean): NetAddress;
		unserialize(buf : SerialBuffer): NetAddress;
	Type : {
				IPv4 : number;
				IPv6 : number;
				UNSPECIFIED : number;
				UNKNOWN : number;
	}
		UNSPECIFIED : NetAddress;
		_reliable : boolean;
}
declare interface PeerId extends Serializable {
		new (arg : Float32Array | SerialBuffer);
		serialize(buf? : SerialBuffer): SerialBuffer;
		subarray(begin : any, end : any): Float32Array;
		serializedSize : number;
		equals(o : PeerId): boolean;
		copy(o : PeerId): PeerId;
		unserialize(buf : SerialBuffer): PeerId;
		fromBase64(base64 : string): PeerId;
		fromHex(hex : string): PeerId;
		SERIALIZED_SIZE : number;
}
declare interface PeerAddress {
		new (protocol : number, services : number, timestamp : number, netAddress : NetAddress, publicKey : PublicKey, distance : number, signature? : Signature);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializeContent(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		serializedContentSize : number;
		equals(o : PeerAddress): boolean;
		hashCode(): string;
		verifySignature(): /* !this._signatureVerified */ any;
		protocol : number;
		services : number;
		timestamp : number;
		distance : number;
		isSeed(): boolean;
		exceedsAge(): boolean;
		netAddress : NetAddress;
		publicKey : PublicKey;
		peerId : PeerId;
		signature : Signature;
		unserialize(buf : SerialBuffer): PeerAddress;
		_protocol : number;
		_services : number;
		_timestamp : number;
		_publicKey : PublicKey;
		_distance : number;
		_signature : Signature;
		_signatureVerified : boolean;
}
declare interface WsBasePeerAddress extends PeerAddress {
		new (protocol : number, services : number, timestamp : number, netAddress : NetAddress, publicKey : PublicKey, distance : number, host : string, port : number, signature? : Signature);
		toSeedString(): string;
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializeContent(buf? : SerialBuffer): SerialBuffer;
		globallyReachable(): boolean;
		serializedSize : number;
		serializedContentSize : number;
		equals(o : any): boolean;
		hashCode(): string;
		host : string;
		port : number;
		protocolPrefix : string;
		fromSeedString(str : string): WsPeerAddress;
}
declare interface WssPeerAddress extends WsBasePeerAddress {
		new (services : number, timestamp : number, netAddress : NetAddress, publicKey : PublicKey, distance : number, host : string, port : number, signature? : Signature);
		equals(o : any): boolean;
		withoutId(): WssPeerAddress;
		seed(host : string, port : number, publicKeyHex? : string): WssPeerAddress;
		unserialize(buf : SerialBuffer): WssPeerAddress;
		_host : string;
		_port : number;
		_protocol : number;
		_services : number;
		_timestamp : number;
		_distance : number;
}
declare interface WsPeerAddress extends WsBasePeerAddress {
		new (services : number, timestamp : number, netAddress : NetAddress, publicKey : PublicKey, distance : number, host : string, port : number, signature? : Signature);
		globallyReachable(): boolean;
		equals(o : any): boolean;
		withoutId(): WsPeerAddress;
		seed(host : string, port : number, publicKeyHex? : string): WsPeerAddress;
		unserialize(buf : SerialBuffer): WsPeerAddress;
		_host : string;
		_port : number;
		_protocol : number;
		_services : number;
		_timestamp : number;
		_distance : number;
}
declare interface RtcPeerAddress extends PeerAddress {
		new (services : number, timestamp : number, netAddress : NetAddress, publicKey : PublicKey, distance : number, signature? : Signature);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		equals(o : any): boolean;
		hashCode(): string;
		unserialize(buf : SerialBuffer): RtcPeerAddress;
		_protocol : number;
		_services : number;
		_timestamp : number;
		_distance : number;
		distance : number;
}
declare interface DumbPeerAddress extends PeerAddress {
		new (services : number, timestamp : number, netAddress : NetAddress, publicKey : PublicKey, distance : number, signature? : Signature);
		serialize(buf? : SerialBuffer): SerialBuffer;
		serializedSize : number;
		equals(o : PeerAddress): boolean;
		hashCode(): string;
		unserialize(buf : SerialBuffer): DumbPeerAddress;
		_protocol : number;
		_services : number;
		_timestamp : number;
		_distance : number;
}
declare interface PeerAddressState {
		new (peerAddress : PeerAddress | {});
		maxFailedAttempts : number;
		failedAttempts : number;
		close(type : number): void;
		equals(o : any): boolean;
		hashCode(): string;
		signalRouter : SignalRouter;
		addedBy : HashSet;
		NEW : number;
		ESTABLISHED : number;
		TRIED : number;
		FAILED : number;
		BANNED : number;
		peerAddress : RtcPeerAddress;
		state : number;
		lastConnected : number;
		bannedUntil : number;
		banBackoff : number;
		_signalRouter : SignalRouter;
		_failedAttempts : number;
		_addedBy : HashSet;
}
declare interface SignalRouter {
		new (peerAddress : PeerAddress | {});
		addRoute(signalChannel : PeerChannel, distance : number, timestamp : number): boolean;
		deleteBestRoute(): any;
		deleteRoute(signalChannel : PeerChannel): any;
		deleteAllRoutes(): any;
		hasRoute(): boolean;
		updateBestRoute(): any;
		equals(o : any): boolean;
		hashCode(): string;
		bestRoute : SignalRoute;
		_bestRoute : SignalRoute;
}
declare interface SignalRoute {
		new (signalChannel : PeerChannel, distance : number, timestamp : number);
		distance : number;
		score : number;
		equals(o : SignalRoute): boolean;
		hashCode(): string;
		signalChannel : PeerChannel;
		failedAttempts : number;
		timestamp : number;
		_distance : number;
}
declare interface SeedList {
		new (seeds : Array<WsPeerAddress>, publicKey? : Promise | PublicKey, signature? : Signature);
		serializeContent(): Float32Array;
		seeds : Array<PeerAddress>;
		publicKey : PublicKey;
		signature : Signature;
		retrieve(url : string, publicKey? : PublicKey): /* SeedList.+SeedList */ any;
		parse(listStr : string, publicKey? : Promise | PublicKey): SeedList;
		_serializeSeeds(seeds : /* SeedList._serializeSeeds0 */ any): Float32Array;
		MAX_SIZE : number;
		REQUEST_TIMEOUT : number;
		_seeds : Array<PeerAddress>;
}
declare interface SeedListUrl {
		new (url : string, publicKeyHex? : string);
		url : string;
		publicKey : PublicKey;
}
declare interface PeerAddressSeeder extends Observable {
		new ();
		collect(): void;
}
declare interface PeerAddressBook extends Observable {
		new (netconfig : NetworkConfig);
		iterator(): /* IteratorUtils.alternate.!0 */ any;
		wsIterator(): /* IteratorUtils.alternate.!0 */ any;
		wssIterator(): /* IteratorUtils.alternate.!0 */ any;
		rtcIterator(): /* IteratorUtils.alternate.!0 */ any;
		_get(peerAddress : PeerAddress): PeerAddressState;
		getState(peerAddress : PeerAddress): PeerAddressState;
		get(peerAddress : PeerAddress): PeerAddress;	get();
		getByPeerId(peerId : PeerId): PeerAddress;	getByPeerId();
		getChannelByPeerId(peerId : PeerId): any;
		query(protocolMask : number, serviceMask : number, maxAddresses : number): PeerAddressBook.prototype.QueryRet;
		add(channel : PeerChannel, arg : any): void;
		_add(channel : PeerChannel, peerAddress : PeerAddress): boolean;
		_addToStore(peerAddressState : PeerAddressState): void;
		_trackByNetAddress(peerAddressState : PeerAddressState, netAddress : NetAddress): void;
		established(channel : any, peerAddress : PeerAddress): any;
		close(channel : PeerChannel, peerAddress : PeerAddress, type : number): any;
		unroutable(channel : PeerChannel, peerAddress : PeerAddress): any;
		_ban(peerAddress : PeerAddress, duration? : number): any;
		isBanned(peerAddress : PeerAddress): boolean;
		_removeFromStore(peerAddress : PeerAddress): any;
		_removeBySignalChannel(channel : PeerChannel): any;
		_housekeeping(): any;
		knownAddressesCount : number;
		knownWsAddressesCount : number;
		knownWssAddressesCount : number;
		knownRtcAddressesCount : number;
		seeded : boolean;
		MAX_AGE_WEBSOCKET : number;
		MAX_AGE_WEBRTC : number;
		MAX_AGE_DUMB : number;
		MAX_DISTANCE : number;
		MAX_FAILED_ATTEMPTS_WS : number;
		MAX_FAILED_ATTEMPTS_RTC : number;
		MAX_TIMESTAMP_DRIFT : number;
		HOUSEKEEPING_INTERVAL : number;
		DEFAULT_BAN_TIME : number;
		INITIAL_FAILED_BACKOFF : number;
		MAX_FAILED_BACKOFF : number;
		MAX_SIZE_WS : number;
		MAX_SIZE_WSS : number;
		MAX_SIZE_RTC : number;
		MAX_SIZE : number;
		MAX_SIZE_PER_IP : number;
		SEEDING_TIMEOUT : number;
		_seeded : boolean;
}
declare interface CloseType {
		new (): CloseType;
}

declare namespace CloseType{
		function isBanningType(closeType : number): boolean;
		function isFailingType(closeType : number): boolean;
		export var GET_BLOCKS_TIMEOUT : number;
		export var GET_CHAIN_PROOF_TIMEOUT : number;
		export var GET_ACCOUNTS_TREE_CHUNK_TIMEOUT : number;
		export var GET_HEADER_TIMEOUT : number;
		export var INVALID_ACCOUNTS_TREE_CHUNK : number;
		export var ACCOUNTS_TREE_CHUNCK_ROOT_HASH_MISMATCH : number;
		export var INVALID_CHAIN_PROOF : number;
		export var RECEIVED_WRONG_HEADER : number;
		export var DID_NOT_GET_REQUESTED_HEADER : number;
		export var GET_ACCOUNTS_PROOF_TIMEOUT : number;
		export var GET_TRANSACTIONS_PROOF_TIMEOUT : number;
		export var GET_TRANSACTION_RECEIPTS_TIMEOUT : number;
		export var INVALID_ACCOUNTS_PROOF : number;
		export var ACCOUNTS_PROOF_ROOT_HASH_MISMATCH : number;
		export var INCOMPLETE_ACCOUNTS_PROOF : number;
		export var INVALID_BLOCK : number;
		export var INVALID_TRANSACTION_PROOF : number;
		export var INVALID_BLOCK_PROOF : number;
		export var SENDING_PING_MESSAGE_FAILED : number;
		export var SENDING_OF_VERSION_MESSAGE_FAILED : number;
		export var SIMULTANEOUS_CONNECTION : number;
		export var DUPLICATE_CONNECTION : number;
		export var PEER_IS_BANNED : number;
		export var MANUAL_NETWORK_DISCONNECT : number;
		export var MANUAL_WEBSOCKET_DISCONNECT : number;
		export var MAX_PEER_COUNT_REACHED : number;
		export var PEER_CONNECTION_RECYCLED : number;
		export var PEER_CONNECTION_RECYCLED_INBOUND_EXCHANGE : number;
		export var INBOUND_CONNECTIONS_BLOCKED : number;
		export var MANUAL_PEER_DISCONNECT : number;
		export var RECEIVED_INVALID_BLOCK : number;
		export var BLOCKCHAIN_SYNC_FAILED : number;
		export var RECEIVED_INVALID_HEADER : number;
		export var RECEIVED_TRANSACTION_NOT_MATCHING_OUR_SUBSCRIPTION : number;
		export var ADDR_MESSAGE_TOO_LARGE : number;
		export var INVALID_ADDR : number;
		export var ADDR_NOT_GLOBALLY_REACHABLE : number;
		export var INVALID_SIGNAL_TTL : number;
		export var INVALID_SIGNATURE : number;
		export var RECEIVED_BLOCK_NOT_MATCHING_OUR_SUBSCRIPTION : number;
		export var INCOMPATIBLE_VERSION : number;
		export var DIFFERENT_GENESIS_BLOCK : number;
		export var INVALID_PEER_ADDRESS_IN_VERSION_MESSAGE : number;
		export var UNEXPECTED_PEER_ADDRESS_IN_VERSION_MESSAGE : number;
		export var INVALID_PUBLIC_KEY_IN_VERACK_MESSAGE : number;
		export var INVALID_SIGNATURE_IN_VERACK_MESSAGE : number;
		export var BANNED_IP : number;
		export var RATE_LIMIT_EXCEEDED : number;
		export var MANUAL_PEER_BAN : number;
		export var CLOSED_BY_REMOTE : number;
		export var PING_TIMEOUT : number;
		export var CONNECTION_FAILED : number;
		export var NETWORK_ERROR : number;
		export var VERSION_TIMEOUT : number;
		export var VERACK_TIMEOUT : number;
		export var ABORTED_SYNC : number;
		export var FAILED_TO_PARSE_MESSAGE_TYPE : number;
		export var CONNECTION_LIMIT_PER_IP : number;
		export var CHANNEL_CLOSING : number;
		export var CONNECTION_LIMIT_DUMB : number;
		export var MANUAL_PEER_FAIL : number;
}
declare interface NetworkConnection extends Observable {
		new (channel : any, protocol : number, netAddress : NetAddress, peerAddress : /* PeerChannel.peerAddress */ any | PeerAddress);
		_onMessage(msg : any): void;
		_onError(e : any): void;
		_onClose(type? : number, reason? : string): void;
		_close(type? : number, reason? : string): void;
		_isChannelOpen(): /* !this._channel */ any;
		_isChannelClosing(): /* !this._channel */ any;
		_isChannelClosed(): boolean;
		send(msg : Float32Array): boolean;
		expectMessage(types : /* Message.Type */ any | Array</* Message.Type */ any>, timeoutCallback : any, msgTimeout? : number, chunkTimeout? : number): void;
		isExpectingMessage(type : /* Message.Type */ any): boolean;
		confirmExpectedMessage(type : /* Message.Type */ any | number, success : boolean): void;
		close(type? : number, reason? : string): void;
		equals(o : NetworkConnection): boolean;
		hashCode(): string;
		id : number;
		protocol : number;
		bytesSent : number;
		bytesReceived : number;
		inbound : boolean;
		outbound : boolean;
		closed : boolean;
		lastMessageReceivedAt : number;
		peerAddress : PeerAddress;
		netAddress : NetAddress;
		_instanceCount : number;
		_channel : DataChannel;
		_protocol : number;
		_bytesSent : number;
		_bytesReceived : number;
		_inbound : boolean;
		_closed : boolean;
		_id : number;
}
declare interface PeerChannel extends Observable {
		new (connection : any);
		_onMessage(rawMsg : any): void;
		expectMessage(types : /* Message.Type */ any | Array</* Message.Type */ any>, timeoutCallback : any, msgTimeout? : number, chunkTimeout? : number): void;
		isExpectingMessage(type : /* Message.Type */ any): boolean;
		_send(msg : Message): boolean;
		close(type? : number, reason? : string): void;
		version(peerAddress : PeerAddress, headHash : Hash, challengeNonce : Float32Array): boolean;
		verack(publicKey : PublicKey, signature : Signature): boolean;
		inv(vectors : Array<InvVector>): boolean;
		notFound(vectors : Array<InvVector>): boolean;
		getData(vectors : Array<InvVector>): boolean;
		getHeader(vectors : Array<InvVector>): boolean;
		block(block : Block): boolean;
		rawBlock(block : Float32Array): boolean;
		header(header : BlockHeader): boolean;
		tx(transaction : Transaction, accountsProof? : AccountsProof): boolean;
		getBlocks(locators : Array<Hash>, maxInvSize : number, ascending? : boolean): boolean;
		mempool(): boolean;
		reject(messageType : number | /* Message.Type */ any, code : number | /* RejectMessage.Code */ any, reason : string, extraData? : Float32Array): boolean;
		subscribe(subscription : Subscription): boolean;
		addr(addresses : Array<PeerAddress>): boolean;
		getAddr(protocolMask : number, serviceMask : number, maxResults : number): boolean;
		ping(nonce : number): boolean;
		pong(nonce : number): boolean;
		signal(senderId : PeerId, recipientId : PeerId, nonce : number, ttl : number, flags : number, payload? : Float32Array, senderPubKey? : PublicKey, signature? : Signature): boolean;
		getAccountsProof(blockHash : Hash, addresses : Array<Address>): boolean;
		accountsProof(blockHash : Hash, proof? : AccountsProof): boolean;
		getChainProof(): boolean;
		chainProof(proof : ChainProof): boolean;
		getAccountsTreeChunk(blockHash : Hash, startPrefix : string): boolean;
		accountsTreeChunk(blockHash : Hash, chunk? : AccountsTreeChunk): boolean;
		getTransactionsProof(blockHash : Hash, addresses : Array<Address>): boolean;
		transactionsProof(blockHash : Hash, proof? : TransactionsProof): boolean;
		getTransactionReceipts(address : Address): boolean;
		transactionReceipts(transactionReceipts : Array<TransactionReceipt>): boolean;
		getBlockProof(blockHashToProve : Hash, knownBlockHash : Hash): boolean;
		blockProof(proof? : BlockChain): boolean;
		getHead(): boolean;
		head(header : BlockHeader): boolean;
		equals(o : PeerChannel): boolean;
		hashCode(): string;
		id : number;
		protocol : number;
		closed : boolean;
		lastMessageReceivedAt : number;
	peerAddress : {
				netAddress : NetAddress;
	}
		netAddress : NetAddress;
	Event : {
	}
}
declare interface NetworkAgent extends Observable {
		new (blockchain : IBlockchain, addresses : PeerAddressBook, networkConfig : NetworkConfig, channel : PeerChannel);
		handshake(): void;
		_onVersion(msg : any): void;
		_sendVerAck(): void;
		_onVerAck(msg : any): void;
		_finishHandshake(): void;
		requestAddresses(maxResults : any): void;
		_onAddr(msg : any): void;
		_onGetAddr(msg : any): any;
		_checkConnectivity(): void;
		_onPing(msg : any): void;
		_onPong(msg : any): void;
		_onClose(): void;
		_canAcceptMessage(msg : Message): boolean;
		channel : PeerChannel;
		peer : Peer;
		HANDSHAKE_TIMEOUT : number;
		PING_TIMEOUT : number;
		CONNECTIVITY_CHECK_INTERVAL : number;
		ANNOUNCE_ADDR_INTERVAL : number;
		VERSION_ATTEMPTS_MAX : number;
		VERSION_RETRY_DELAY : number;
		GETADDR_RATE_LIMIT : number;
		MAX_ADDR_PER_MESSAGE : number;
		MAX_ADDR_PER_REQUEST : number;
		NUM_ADDR_PER_REQUEST : number;
		_peer : Peer;
		_versionReceived : boolean;
		_verackReceived : boolean;
		_versionSent : boolean;
		_verackSent : boolean;
		_versionAttempts : number;
		_peerAddressVerified : boolean;
	_addressRequest : {
				maxResults : number;
	}
		_getAddrLimit : RateLimit;
}
declare interface PeerConnectionStatistics {
		new ();
		reset(): any;
		addLatency(latency : number): any;
		addMessage(msg : Message): any;
		getMessageCount(msgType : number): number;
		latencyMedian : number;
		_latencies : Array<number>;
}
declare interface PeerConnection {
		new ();
		id : number;
		state : number;
		negotiating(): any;
		score : number;
		establishedSince : number;
		ageEstablished : number;
		close(): any;
		peerAddress : PeerAddress;
		peerChannel : PeerChannel;
		peer : /* NanoConsensusAgent._peer */ any;
		networkConnection : NetworkConnection;
		networkAgent : NetworkAgent;
		statistics : PeerConnectionStatistics;
		getOutbound(peerAddress : PeerAddress): any;	getOutbound();
		getInbound(networkConnection : any): any;	getInbound();
		_instanceCount : number;
		_id : number;
		_networkConnection : NetworkConnection;
		_networkAgent : NetworkAgent;
		_state : number;
		_score : number;
		_establishedSince : number;
		_statistics : PeerConnectionStatistics;
}
declare interface PeerConnectionState {
		new (): PeerConnectionState;
}

declare namespace PeerConnectionState{
		export var NEW : number;
		export var CONNECTING : number;
		export var CONNECTED : number;
		export var NEGOTIATING : number;
		export var ESTABLISHED : number;
		export var CLOSED : number;
}
declare interface SignalProcessor {
		new (peerAddresses : PeerAddressBook, networkConfig : NetworkConfig, rtcConnector : WebRtcConnector);
		onSignal(channel : PeerChannel, msg : SignalMessage): any;
		_forwards : SignalStore;
}
declare interface SignalStore {
		new (maxSize : number);
		length : number;
		add(senderId : PeerId, recipientId : PeerId, nonce : number): void;
		contains(senderId : PeerId, recipientId : PeerId, nonce : number): boolean;
		signalForwarded(senderId : PeerId, recipientId : PeerId, nonce : number): boolean;
		SIGNAL_MAX_AGE : number;
		_maxSize : number;
}
declare interface ForwardedSignal {
		new (senderId : PeerId, recipientId : PeerId, nonce : number);
		equals(o : ForwardedSignal): boolean;
		hashCode(): string;
		_nonce : number;
}
declare interface ConnectionPool extends Observable {
		new (peerAddresses : PeerAddressBook, networkConfig : NetworkConfig, blockchain : FullChain | NanoChain, time : Time);
		values(): ConnectionPool.prototype.ValuesRet;
		valueIterator(): /* HashMap.prototype.valueIterator.!ret */ any;
		getConnectionByPeerAddress(peerAddress : PeerAddress): PeerConnection;
		getConnectionsByNetAddress(netAddress : NetAddress): ConnectionPool.prototype.GetConnectionsByNetAddressRet;
		getConnectionsBySubnet(netAddress : NetAddress): ConnectionPool.prototype.GetConnectionsBySubnetRet;
		getOutboundConnectionsBySubnet(netAddress : NetAddress): ConnectionPool.prototype.GetOutboundConnectionsBySubnetRet;
		_getSubnetAddress(netAddress : NetAddress): NetAddress;
		_add(peerConnection : PeerConnection): any;
		_remove(peerConnection : PeerConnection): any;
		_addNetAddress(peerConnection : PeerConnection, netAddress : NetAddress): any;
		_removeNetAddress(peerConnection : PeerConnection, netAddress : NetAddress): any;
		_checkOutboundConnectionRequest(peerAddress : PeerAddress): boolean;
		connectOutbound(peerAddress : PeerAddress): boolean;
		_checkConnection(peerConnection : PeerConnection): boolean;
		_onConnection(conn : any): any;
		_checkHandshake(peerConnection : PeerConnection, peer : any): boolean;
		_onHandshake(peerConnection : PeerConnection, peer : any): any;
		_onClose(peerConnection : PeerConnection, type : number, reason : string): any;
		_banIp(netAddress : NetAddress): any;
		_isIpBanned(netAddress : NetAddress): boolean;
		_checkUnbanIps(): any;
		_onConnectError(peerAddress : any, reason : any): any;
		_updateConnectedPeerCount(peerConnection : PeerConnection, delta : number): any;
		disconnect(reason : any): any;
		disconnectWebSocket(): void;
		peerCountWs : number;
		peerCountWss : number;
		peerCountRtc : number;
		peerCountDumb : number;
		peerCount : number;
		peerCountFull : number;
		peerCountLight : number;
		peerCountNano : number;
		peerCountOutbound : number;
		peerCountFullWsOutbound : number;
		connectingCount : number;
		count : number;
		bytesSent : number;
		bytesReceived : number;
		allowInboundConnections : boolean;
		DEFAULT_BAN_TIME : number;
		UNBAN_IPS_INTERVAL : number;
		_bytesSent : number;
		_bytesReceived : number;
		_wssConnector : WebSocketConnector;
		_rtcConnector : WebRtcConnector;
		_peerCountWs : number;
		_peerCountWss : number;
		_peerCountRtc : number;
		_peerCountDumb : number;
		_peerCountFull : number;
		_peerCountLight : number;
		_peerCountNano : number;
		_peerCountOutbound : number;
		_peerCountFullWsOutbound : number;
		_connectingCount : number;
		_inboundCount : number;
		_signalProcessor : SignalProcessor;
		_allowInboundExchange : boolean;
		_allowInboundConnections : boolean;
		allowInboundExchange : boolean;
}
declare interface PeerScorer {
		new (networkConfig : NetworkConfig, addresses : PeerAddressBook, connections : ConnectionPool);
		pickAddress(): PeerAddress;	pickAddress();
		_scoreAddress(peerAddressState : PeerAddressState, allowBadPeers? : boolean): number;
		isGoodPeerSet(): boolean;
		needsGoodPeers(): boolean;
		needsMorePeers(): boolean;
		isGoodPeer(peerAddress : PeerAddress): boolean;
		scoreConnections(): any;
		recycleConnections(count : number, type : number, reason : string): any;
		_scoreConnection(peerConnection : PeerConnection): number;
		_scoreConnectionAge(peerConnection : PeerConnection): number;
		lowestConnectionScore : number;
		connectionScores : Array<PeerConnection>;
		_getMinAge(peerAddress : PeerAddress): number;
		PEER_COUNT_MIN_FULL_WS_OUTBOUND : number;
		PEER_COUNT_MIN_OUTBOUND : number;
		PICK_SELECTION_SIZE : number;
		MIN_AGE_FULL : number;
		BEST_AGE_FULL : number;
		MIN_AGE_LIGHT : number;
		BEST_AGE_LIGHT : number;
		MAX_AGE_LIGHT : number;
		MIN_AGE_NANO : number;
		BEST_AGE_NANO : number;
		MAX_AGE_NANO : number;
		BEST_PROTOCOL_WS_DISTRIBUTION : number;
		_connectionScores : Array</* PeerScorer.+PeerConnection */ any>;
}
declare interface NetworkConfig {
		new (protocolMask : number);
		initPersistent(): any;
		initVolatile(): any;
		_init(db : PeerKeyStore): any;
		protocol : number;
		protocolMask : number;
		canConnect(protocol : number): boolean;
		publicKey : PublicKey;
		peerId : PeerId;
		peerAddress : PeerAddress;
		keyPair : KeyPair;
		services : Services;
		getDefault(): NetworkConfig;
		_protocolMask : number;
		_keyPair : KeyPair;
		_peerId : PeerId;
}
declare interface WsNetworkConfig extends NetworkConfig {
		new (host : any, port : number, reverseProxy : any);
		protocol : number;
		port : number;
		usingReverseProxy : boolean;
	reverseProxyConfig : {
				port : number;
				address : string;
				header : string;
	}
		peerAddress : WssPeerAddress;
		secure : boolean;
}
declare interface WssNetworkConfig extends WsNetworkConfig {
		new (host : any, port : number, key? : string, cert? : string, reverseProxy : /* WsNetworkConfig.!2 */ any);
		protocol : number;
	sslConfig : {
				key : string;
				cert : string;
	}
		peerAddress : WsPeerAddress;
		secure : boolean;
}
declare interface RtcNetworkConfig extends NetworkConfig {
		new ();
		protocol : number;
	rtcConfig : {
				iceServers : Array</* RtcNetworkConfig.prototype.rtcConfig.iceServers.0,RtcNetworkConfig.prototype.rtcConfig.iceServers.1 */ any>;
	}
		peerAddress : RtcPeerAddress;
}
declare interface DumbNetworkConfig extends NetworkConfig {
		new ();
		protocol : number;
		peerAddress : DumbPeerAddress;
}
declare interface Network extends Observable {
		new (blockchain : FullChain | NanoChain, networkConfig : NetworkConfig, time : Time);
		connect(): any;
		disconnect(reason : any): any;
		disconnectWebSocket(): void;
		_onPeerJoined(peer : any): any;
		_onPeerLeft(peer : any): any;
		_onPeersChanged(): any;
		_onRecyclingRequest(): any;
		_checkPeerCount(): any;
		_updateTimeOffset(): any;
		_housekeeping(): any;
		_refreshAddresses(): void;
		peerCount : number;
		peerCountWebSocket : number;
		peerCountWebSocketSecure : number;
		peerCountWebRtc : number;
		peerCountDumb : number;
		peerCountConnecting : number;
		knownAddressesCount : number;
		bytesSent : number;
		bytesReceived : number;
		allowInboundConnections : boolean;
		time : Time;
		config : NetworkConfig;
		addresses : PeerAddressBook;
		connections : ConnectionPool;
		PEER_COUNT_MAX : number;
		INBOUND_PEER_COUNT_PER_SUBNET_MAX : number;
		OUTBOUND_PEER_COUNT_PER_SUBNET_MAX : number;
		PEER_COUNT_PER_IP_MAX : number;
		PEER_COUNT_DUMB_MAX : number;
		IPV4_SUBNET_MASK : number;
		IPV6_SUBNET_MASK : number;
		PEER_COUNT_RECYCLING_ACTIVE : number;
		RECYCLING_PERCENTAGE_MIN : number;
		RECYCLING_PERCENTAGE_MAX : number;
		CONNECTING_COUNT_MAX : number;
		SIGNAL_TTL_INITIAL : number;
		CONNECT_BACKOFF_INITIAL : number;
		CONNECT_BACKOFF_MAX : number;
		TIME_OFFSET_MAX : number;
		HOUSEKEEPING_INTERVAL : number;
		SCORE_INBOUND_EXCHANGE : number;
		CONNECT_THROTTLE : number;
		ADDRESS_REQUEST_CUTOFF : number;
		ADDRESS_REQUEST_PEERS : number;
		SIGNALING_ENABLED : number;
		_blockchain : IBlockchain;
		_networkConfig : NetworkConfig;
		_autoConnect : boolean;
		_backoff : number;
		_backedOff : boolean;
		_addresses : PeerAddressBook;
		_connections : ConnectionPool;
		_scorer : PeerScorer;
		_houseKeepingIntervalId : number;
}
declare interface NetUtils {
		new (): NetUtils;
}

declare namespace NetUtils{
		function isPrivateIP(ip : Float32Array | string): boolean;
		function isLocalIP(ip : Float32Array | string): boolean;
		function isIPv4inSubnet(ip : Float32Array | string, subnet : string): boolean;
		function isIPv4Address(ip : string | Float32Array): boolean;
		function isIPv6Address(ip : Float32Array | string): boolean;
		function hostGloballyReachable(host : string): boolean;
		function _IPv4toLong(ip : Float32Array | string): number;	function _IPv4toLong();
		function _IPv4toIPv6(ip : string): string;
		function ipToBytes(ip : Float32Array | string): Float32Array;
		function bytesToIp(ip : Float32Array): string;
		function _extendIPv6(parts : /* NetUtils._extendIPv60 */ any): /* NetUtils._extendIPv60 */ any;
		function ipToSubnet(ip : Float32Array | string, bitCount : number): Float32Array;	function ipToSubnet();
		export var IPv4_LENGTH : number;
		export var IPv6_LENGTH : number;
		export var IPv4_PRIVATE_NETWORK : Array<string>;
}
declare interface PeerKeyStore {
		new (store : any);
		get(key : string): void;
		put(key : string, keyPair : KeyPair): Promise;
		getPersistent(): PeerKeyStore;
		createVolatile(): PeerKeyStore;
		_instance : PeerKeyStore;
		VERSION : number;
		KEY_DATABASE : string;
		INITIAL_DB_SIZE : number;
}
declare interface PeerKeyStoreCodec {
		new ();
		encode(obj : any): void;
		decode(buf : any, key : string): KeyPair;
		leveldbValueEncoding : string;
}
declare interface Peer {
		new (channel : PeerChannel, version : number | ((peerAddress : PeerAddress, headHash : Hash, challengeNonce : Float32Array) => boolean), headHash : Hash, timeOffset : number);
		_setNetAddress(): any;
		timeOffset : number;
		id : number;
		equals(o : Peer): boolean;
		hashCode(): string;
		channel : PeerChannel;
		headHash : Hash;
		head : BlockHeader;
	peerAddress : {
				netAddress : NetAddress;
	}
		netAddress : NetAddress;
		_channel : PeerChannel;
		_timeOffset : number;
}
declare interface Miner extends Observable {
		new (blockchain : BaseChain, accounts : Accounts, mempool : Mempool, time : Time, minerAddress : Address, extraData? : Float32Array);
		startWork(): void;
		_startWork(): void;
		_onWorkerShare(obj : /* Miner.prototype._onWorkerShare0 */ any): /* !this._workerPool.poolSize */ any;
		shareCompact : number;
		nonce : number;
		address : Address;
		extraData : SerialBuffer;
		MIN_TIME_ON_BLOCK : number;
		MOVING_AVERAGE_MAX_SIZE : number;
}
declare interface BasePoolMiner extends Miner {
		new (mode : /* BasePoolMiner.Mode */ any | string, blockchain : BaseChain, accounts : Accounts, mempool : Mempool, time : Time, address : Address, deviceId : number, deviceData : Float32Array, extraData? : Float32Array);
		requestPayout(): void;
		_send(msg : /* BasePoolMiner.prototype._send0 */ any): void;
		connect(host : any, port : any): void;
		_onOpen(ws : any): void;
		_register(): void;
		_onError(ws : any, e : any): void;
		_onClose(ws : any, e : any): void;
		_timeoutReconnect(): void;
		disconnect(): void;
		_onMessage(ws : any, msg : any): void;
		_onBalance(balance : number, confirmedBalance : number, payoutRequestActive : boolean): void;
		_turnPoolOff(): void;
		_onNewPoolSettings(address : Address, extraData : Float32Array | SerialBuffer, targetCompact : number, nonce : number): void;
		_changeConnectionState(connectionState : number): void;
		isConnected(): boolean;
		isDisconnected(): boolean;
		host : string;
		port : number;
		_hashCount : number;
		_lastElapsed : Array<number>;
		_lastHashCounts : Array<number>;
		_totalHashCount : number;
		_totalElapsed : number;
		_lastHashrate : number;
		_retry : number;
		_lastRestart : number;
		_restarting : boolean;
		_mempoolChanged : boolean;
		_exponentialBackoffReconnect : number;
		balance : number;
		confirmedBalance : number;
		payoutRequestActive : boolean;
		connectionState : number;
		address : Address;
		onmessage : /* ArrayBuffer.onmessage */ any;
		onclose : /* ArrayBuffer.onclose */ any;
		onerror : /* ArrayBuffer.onerror */ any;
		generateDeviceId(networkConfig : NetworkConfig): number;
		PAYOUT_NONCE_PREFIX : string;
		RECONNECT_TIMEOUT : number;
		RECONNECT_TIMEOUT_MAX : number;
	ConnectionState : {
				CONNECTED : number;
				CONNECTING : number;
				CLOSED : number;
	}
	Mode : {
				NANO : string;
				SMART : string;
	}
}
declare interface SmartPoolMiner extends BasePoolMiner {
		new (blockchain : BaseChain, accounts : Accounts, mempool : Mempool, time : Time, address : Address, deviceId : number, deviceData : any, extraData? : Float32Array);
		_onBlockMined(block : any, fullValid : any): void;
}
declare interface NanoPoolMiner extends BasePoolMiner {
		new (blockchain : BaseChain, time : Time, address : Address, deviceId : number, deviceData : any);
		startWork(): void;
		stopWork(): void;
		_onBlockMined(block : any): void;
		_onMessage(ws : any, msg : any): void;
		_handleNewBlock(msg : any): void;
		getNextBlock(): Block;
		_turnPoolOff(): void;
}
declare interface Wallet {
		new (keyPair : KeyPair): Wallet;
		createTransaction(recipient : Address, value : number, fee : number, validityStartHeight : number): Transaction;
		signTransaction(transaction : Transaction): SignatureProof;
		exportPlain(): Float32Array;
		exportEncrypted(key : Float32Array | string, unlockKey? : Float32Array | string): SerialBuffer;
		isLocked : boolean;
		lock(key : Float32Array | string): void;
		relock(): void;
		unlock(key : Float32Array | string): void;
		equals(o : Wallet): boolean;
		address : Address;
		publicKey : PublicKey;
		keyPair : KeyPair;
		generate(): Wallet;
		loadPlain(buf : any): Wallet;
		loadEncrypted(buf : any, key : Float32Array | string): Wallet;
}
declare interface MultiSigWallet extends Wallet {
		new (keyPair : KeyPair, minSignatures : number, publicKeys : Array<PublicKey>): MultiSigWallet;
		exportPlain(): SerialBuffer;	exportPlain();
		exportEncrypted(key : Float32Array | string, unlockKey? : Float32Array | string): SerialBuffer;
		encryptedExportedSize : number;
		exportedSize : number;
		createTransaction(recipientAddr : Address, value : number, fee : number, validityStartHeight : number): Transaction;
		createCommitment(): CommitmentPair;
		partiallySignTransaction(transaction : Transaction, publicKeys : Array<PublicKey>, aggregatedCommitment : Commitment, secret : RandomSecret): PartialSignature;
		signTransaction(transaction : Transaction, aggregatedPublicKey : PublicKey, aggregatedCommitment : Commitment, signatures : Array<PartialSignature>): SignatureProof;
		completeTransaction(transaction : Transaction, aggregatedPublicKey : PublicKey, aggregatedCommitment : Commitment, signatures : MultiSigWallet.prototype.CompleteTransaction3): Transaction;
		minSignatures : number;
		publicKeys : Array<PublicKey>;
		fromPublicKeys(keyPair : KeyPair, minSignatures : number, publicKeys : MultiSigWallet.FromPublicKeys2): MultiSigWallet;
		_loadMultiSig(keyPair : KeyPair, buf : SerialBuffer): MultiSigWallet;
		loadPlain(buf : any): MultiSigWallet;
		loadEncrypted(buf : any, key : Float32Array | string): MultiSigWallet;
		_minSignatures : number;
		_publicKeys : Array<PublicKey>;
}
declare interface WalletStore {
		new (dbName : any): WalletStore;
		_init(): /* !this */ any;
		hasDefault(key : any): boolean;
		getDefault(key? : Float32Array | string): Wallet;
		setDefault(address : Address): Promise;
		get(address : Address, key? : Float32Array | string): Wallet;
		put(wallet : Wallet, key? : Float32Array | string, unlockKey? : Float32Array | string): Promise;
		remove(address : Address): Promise;
		list(): WalletStore.prototype.ListRet;
		getMultiSig(address : Address, key? : Float32Array | string): MultiSigWallet;
		putMultiSig(wallet : MultiSigWallet, key? : Float32Array | string, unlockKey? : Float32Array | string): Promise;
		removeMultiSig(address : Address): Promise;
		listMultiSig(): WalletStore.prototype.ListMultiSigRet;
		close(): void;
		VERSION : number;
		INITIAL_DB_SIZE : number;
		MIN_RESIZE : number;
		WALLET_DATABASE : string;
		MULTISIG_WALLET_DATABASE : string;
}
declare interface WalletStoreCodec {
		new ();
		encode(obj : any): any;
		decode(buf : any, key : string): Float32Array;
		leveldbValueEncoding : string;
}
declare interface MinerWorker {
		new ();
		multiMine(blockHeader : any, compact : any, minNonce : any, maxNonce : any): void;
}
declare interface MinerWorkerImpl {
		new ();
		init(name : string): void;
		multiMine(input : any, compact : any, minNonce : any, maxNonce : any): boolean;	multiMine();
		_superInit(name : string): void;
		_name : string;
}
declare interface MinerWorkerPool {
		new (size : any);
		noncesPerRun : number;
		runsPerCycle : number;
		cycleWait : number;
		on(type : string, callback : Function): number;
		off(type : string, id : number): void;
		startMiningOnBlock(block : Block, shareCompact? : number): void;
		stop(): void;
		_updateToSize(): void;
		_startMiner(): void;
		_singleMiner(nonceRange : /* MinerWorkerPool.prototype._singleMiner0 */ any): void;
		_miningEnabled : boolean;
		_activeNonces : Array</* MinerWorkerPool._activeNoncesI */ any>;
		_block : Block;
		_noncesPerRun : number;
		_observable : Observable;
		_runsPerCycle : number;
		_cycleWait : number;
		_superUpdateToSize(): /* MinerWorkerPool.+MinerWorkerPool */ any;
		multiMine(blockHeader : SerialBuffer, compact : number, minNonce : number, maxNonce : number): /* MinerWorkerPool.+Promise */ any;
		_proxyInitializer(name : string): any;
		_name : string;
		_poolSize : number;
		_workers : Array<any>;
		_freeWorkers : Array<any>;
		_waitingCalls : Array</* MinerWorkerPool._waitingCallsI */ any>;
}
declare namespace ../core/src/main/platform/browser/Class.js{
	interface ArrayBuffer {
				onmessage(msg : any): void;
				onclose(): void;
				onerror(e : any): any;
				netAddress : NetAddress;
	}
	interface Float32Array {
	}
	interface Promise {
				:t : Array</* Promise.:t */ any>;
	}
}
