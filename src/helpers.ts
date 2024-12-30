async function* streamToAsyncIterable(stream: ReadableStream<ArrayBufferLike>) {
	const reader = stream.getReader();

	try {
		const decoder = new TextDecoder();
		while (true) {
			const { done, value } = await reader.read();
			const chunk = decoder.decode(value);
			if (done) break;
			if (value !== undefined) yield chunk;
		}
	} finally {
		reader.releaseLock();
	}
}

export function toIterableReadableStream(stream: ReadableStream<Uint8Array>) {
	return streamToAsyncIterable(stream);
}
