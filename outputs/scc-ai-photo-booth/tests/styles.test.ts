import test from "node:test"; import assert from "node:assert/strict"; import { styles } from "../config/styles";
test("enabled styles have an identity-preserving prompt source",()=>{assert.ok(styles.filter(s=>s.enabled).length>0);for(const s of styles.filter(s=>s.enabled)){assert.ok(s.id&&s.titleAr&&s.titleEn&&s.prompt)}});
