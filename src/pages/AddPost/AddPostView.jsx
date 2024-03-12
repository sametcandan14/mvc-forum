const AddPostView = ({ onInputChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Yeni Gönderi Ekle</h2>
        <fieldset>
          <label>Kullanıcı Adı</label>
          <input
            onChange={(e) => onInputChange("user", e.target.value)}
            type="text"
            placeholder="Adınızı Giriniz"
          />
        </fieldset>
        <fieldset>
          <label>Başlık</label>
          <input
            onChange={(e) => onInputChange("title", e.target.value)}
            type="text"
            placeholder="Başlık Giriniz"
          />
        </fieldset>
        <fieldset>
          <label>Açıklama</label>
          <textarea
            onChange={(e) => onInputChange("text", e.target.value)}
            type="text"
            placeholder="Açıklamanızı Giriniz"
            maxLength={"100"}
          />
        </fieldset>

        <button>Gönder</button>
      </form>
    </div>
  );
};

export default AddPostView;
