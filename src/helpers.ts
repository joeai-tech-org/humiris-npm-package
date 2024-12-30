async function* streamToAsyncIterable<T>(
	stream: ReadableStream<T>
): AsyncIterable<T> {
	const reader = stream.getReader();

	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			if (value !== undefined) yield value;
		}
	} finally {
		reader.releaseLock();
	}
}

export function toIterableReadableStream(
	stream: ReadableStream<Uint8Array>
): AsyncIterable<Uint8Array> {
	return streamToAsyncIterable(stream);
}
