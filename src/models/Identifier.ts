import { Snowflake } from 'nodejs-snowflake';

const CUSTOM_EPOCH = 1669842000; // 2022, December 1st, 00:00, UTC+3 

const config = {
	custom_epoch: CUSTOM_EPOCH,
	instance_id: 0
}

const snowflake = new Snowflake(config);

export function timestampFromStringId(id: string) {
	return Math.floor(Snowflake.timestampFromID(BigInt(id), CUSTOM_EPOCH) / 1000);
}

export class Identifier {
	private readonly _id_bigint: BigInt;
	private readonly _id_string: string;

	constructor(fromString?: string) {
		if (fromString !== undefined) {
			this._id_string = fromString;
			this._id_bigint = BigInt(fromString);
		}
		else {
			this._id_bigint = snowflake.getUniqueID();
			this._id_string = this._id_bigint.toString();
		}
	}

	toString(): string {
		return this._id_string;
	}

	get timestamp(): number {
		return Snowflake.timestampFromID(this._id_bigint, CUSTOM_EPOCH);
	}
}