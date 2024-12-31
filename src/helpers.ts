import { BasicChatOutput } from '.';

async function* basicStreamToAsyncIterable(
	stream: ReadableStream<ArrayBufferLike>
) {
	const reader = stream.getReader();

	try {
		const decoder = new TextDecoder();
		while (true) {
			const { done, value } = await reader.read();
			const chunk = decoder.decode(value);
			const parsedChunk = JSON.parse(chunk) as BasicChatOutput;
			if (done) break;
			if (value !== undefined) yield parsedChunk;
		}
	} finally {
		reader.releaseLock();
	}
}

export function basicIterableReadableStream(
	stream: ReadableStream<Uint8Array>
) {
	return basicStreamToAsyncIterable(stream);
}
